import Sequelize, { Op } from 'Sequelize';

import Deliver from '../models/Deliver';
import Package from '../models/Package';

class DeliverAreaController {
  // lista todas as entregas do deliver que não estejam entregues nem
  // canceladas.
  async index(req, res) {
    const { id } = req.params;

    // Condição para verificar se o ID do deliver foi fornecido,
    // mas só funciona se for um char vazio
    // verficar se há possibilidade de validar com yup ou outra lib
    const idNotProvided = isNaN(req.params.id);
    if (idNotProvided) {
      return res.status(400).json({ error: 'Deliver ID not provided!' });
    }

    const deliverExist = await Deliver.findByPk(id);
    const listOfPackages = await Package.findAll({
      where: {
        deliveryman_id: id,
        signature_id: null,
        canceled_at: null,
      },
    });

    if (!deliverExist) {
      return res.status(400).json({ error: 'ID does not exist!' });
    }

    return res.json(listOfPackages);
  }

  // Lista todas as entregas de determinado deliver que já foram realizadas.
  async show(req, res) {
    const { id } = req.params;

    const deliverDone = await Package.findAll({
      where: {
        deliveryman_id: id,
        signature_id: {
          [Op.ne]: null,
        },
      },
    });

    return res.json(deliverDone);
  }
}

export default new DeliverAreaController();
