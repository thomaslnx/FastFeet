import * as Yup from 'yup';
import Sequelize, { Op } from 'Sequelize';
import Deliver from '../models/Deliver';

class DeliverController {
  // Method to create a deliver.
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, avatar_id, email } = req.body;

    const deliverExists = await Deliver.findOne({
      where: {
        email,
      },
    });

    if (deliverExists) {
      return res
        .status(400)
        .json({ error: 'Deliver already exists on our database' });
    }

    await Deliver.create(req.body);

    return res.json({
      name,
      email,
    });
  }

  // Method to list all delivers.
  async index(req, res) {
    let deliver;

    if (req.query.q) {
      deliver = req.query.q;

      const parcel = await Deliver.findAll({
        where: {
          name:{
            [Op.iLike]: `${deliver}%`,
          }
        }
      })

      return res.json(parcel);
    } else {

      const delivers = await Deliver.findAll();
      return res.json(delivers);

    }
  }

  // Method to update a deliver based on his id.
  async update(req, res) {
    const { name, avatar_id, email } = req.body;
    const { id } = req.params;

    const deliver = await Deliver.findByPk(id);

    if (!deliver) {
      return res.status(400).json({ error: 'Deliver does not exists' });
    }

    if (name && name !== deliver.name) {
      await deliver.update({
        name,
      });

      return res.json(deliver);
    }

    if (email && email !== deliver.email) {
      await deliver.update({
        email,
      });

      return res.json(deliver);
    }

    return res.json(deliver);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliver = await Deliver.findByPk(id);

    if (!deliver) {
      return res.status(400).json({ error: 'Deliver not found' });
    }

    await deliver.destroy({
      where: {
        id,
      },
    });

    return res.json({ message: 'Deliver deleted with success' });
  }
}

export default new DeliverController();
