import * as Yup from 'yup';
import Deliver from '../models/Deliver';

class DeliverController {
  // Method to create a deliver.
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number(),
      email: Yup.string()
        .email()
        .required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, avatar_id, email } = req.body;

    const deliverExists = await Deliver.findOne({
      where: {
        email
      }
    });

    if (deliverExists) {
      return res
        .status(400)
        .json({ error: 'Deliver already exists on our database' });
    }

    await Deliver.create(req.body);

    return res.json({
      name,
      email
    });
  }

  // Method to list all delivers.
  async index(req, res) {
    const delivers = await Deliver.findAll();

    return res.json(delivers);
  }

  // Method to update a deliver based on his id.
  async update(req, res) {
    const { name, avatar_id, email } = req.body;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Deliver does not exists' });
    }

    const deliver = await Deliver.findOne({
      where: {
        id
      }
    });

    return res.json({ ok: true });
  }
}

export default new DeliverController();
