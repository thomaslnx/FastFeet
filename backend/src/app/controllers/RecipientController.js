import * as Yup from 'yup';
import { Op } from 'Sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    let recipient;

    if (req.query.q) {
      recipient = req.query.q;

      const recipients = await Recipient.findAll({
        where: {
          name:{
            [Op.iLike]: `${recipient}%`,
          }
        }
      })

      return res.json(recipients);
    }
    else {
      const recipient = await Recipient.findAll();
      return res.json(recipient);
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      house_number: Yup.number().required(),
      type_address: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: {
        name: req.body.name
      }
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient alread exists' });
    }

    const {
      name,
      street,
      house_number,
      type_address,
      state,
      city,
      cep
    } = await Recipient.create(req.body);

    return res.json({
      name,
      street,
      house_number,
      type_address,
      state,
      city,
      cep
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      newName: Yup.string(),
      street: Yup.string(),
      house_number: Yup.number().when('street', (street, field) =>
        street ? field.required() : field
      ),
      type_address: Yup.string().when('street', (street, field) =>
        street ? field.required() : field
      ),
      state: Yup.string(),
      city: Yup.string().when('street', (street, field) =>
        street ? field.required() : field
      ),
      cep: Yup.number().when('street', (street, field) =>
        street ? field.required() : field
      )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      name,
      newName,
      street,
      house_number,
      type_address,
      state,
      city,
      cep
    } = req.body;

    const recipient = await Recipient.findOne({
      where: {
        name
      }
    });

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    if (newName && newName !== name) {
      const updatedRecipient = await recipient.update({
        name: newName
      });
      return res.json(updatedRecipient);
    }

    const updatedRecipient = await recipient.update(req.body);

    return res.json(updatedRecipient);
  }
}

export default new RecipientController();
