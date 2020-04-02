import { parse, format, parseISO } from 'date-fns';
import Sequelize, { Op } from 'Sequelize';

import Package from '../models/Package';
import Deliver from '../models/Deliver';
import Signature from '../models/Signature';

class ChangePackageStatusController {
  async update(req, res) {
    // Fazer 3 verificações:
    // Se o entregador existe;
    // Se o pacote existe;
    const { id } = req.params;
    const { new_start_date, new_end_date } = req.body;

    const parcel = await Package.findByPk(id);

    // Verifica se o id da entrega está correto
    if (!parcel) {
      return res.status(400).json({
        error: 'O id fornecido não existe, corrija o id e tente novamente.',
      });
    }

    /*
     * Caso o usuário decida não retirar aquela encomenda naquele momento ele
     * seta novamente o valor do start_date para null e escola outra entrega.
     */
    if (new_start_date === 'null' || new_start_date === '') {
      await parcel.update({
        start_date: null,
      });
    } else {
      /* Converte a data fornecida pelo deliver em um data apropriada para ser
       * armazenada no banco de dados.
       */
      const convertedDate = parse(new_start_date, 'dd-MM-yyyy', new Date());
      const currentDate = Date(convertedDate);
      const formatedDate = format(
        new Date(currentDate),
        "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      );

      // Split date and time from the moment of delivery man pick your package.
      const [date, time] = formatedDate.split('T');
      const [hour] = time.split(':'); // A hora aqui é uma string

      // Verifica se a hora de retirada do pacote está entre 08:00h e 18:00h
      if (hour < 8 || hour == 18) {
        return res.status(401).json({
          error:
            'Atenção Deliver, as entregas só poderão ser retiradas entre 8:00 e 18:00h',
        });
      }
      let pickDay = {};
      let totalPickDay = 0;

      // Conta a quantidade de entregas que o deliveryman retira para entregar, se a
      // quantidade for maior que 5 ele recebe um alerta.
      if (date) {
        pickDay = await Package.findAndCountAll({
          where: {
            start_date: {
              [Op.ne]: null,
            },
          },
        });
        totalPickDay = pickDay.count;
      } // Não retorna a quantidade atualizada do banco de dados.

      if (totalPickDay > 4) {
        return res
          .status(400)
          .json({ error: 'Você só pode realizar 5 entregas por dia' });
      } else {
        parcel.update({
          start_date: formatedDate,
        });

        return res.json(pickDay.rows);
      }
    }

    return res.json({ ok: true });
  }
}

export default new ChangePackageStatusController();
