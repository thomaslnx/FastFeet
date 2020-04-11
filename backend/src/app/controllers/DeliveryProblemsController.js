import Sequelize, { Op } from 'Sequelize';

import Package from '../models/Package';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemsController {
  async store(req, res) {
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

    // Cadastra o problema com a entrega na tabela delivery_problems
    const problem = await DeliveryProblem.create({
      id: packageId,
      description,
    });

    return res.json(problem);
  }
}

export default new DeliveryProblemsController();
