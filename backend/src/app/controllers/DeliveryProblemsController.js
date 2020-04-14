import Sequelize, { Op } from 'Sequelize';
import * as Yup from 'Yup';

import Package from '../models/Package';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Please, inform a problem description' });
    }
    // ID da entrega
    const { packageId } = req.params;
    const { description } = req.body;

    // Busca o id do package no banco de dados
    const packageExist = await Package.findOne({
      where: {
        id: packageId,
        signature_id: null,
        end_date: null,
        start_date: {
          [Op.ne]: null,
        },
      },
    });

    //Verifica se o ID do package existe no banco de dados
    if (!packageExist) {
      return res
        .status(400)
        .json({ error: 'Theres a problem with Id supplied' });
    }

    /*
     * Validação para ver se já existe algum problema relatado com a respectiva
     * entrega
     */

    const problem = await DeliveryProblem.findOne({
      where: {
        id: packageId,
      },
    });

    if (problem) {
      return res
        .status(400)
        .json({ error: 'Já existe um problema relatado para esta entrega' });
    }

    // Cadastra o problema com a entrega na tabela delivery_problems
    const addProblem = await DeliveryProblem.create({
      id: packageId,
      description,
      attributes: ['id', 'description'],
    });

    return res.json({
      id: addProblem.id,
      description: addProblem.description,
    });
  }
}

export default new DeliveryProblemsController();
