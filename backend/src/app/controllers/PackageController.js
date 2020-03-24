import * as Yup from 'yup';
import { resolve } from 'path';
import Package from '../models/Package';

import Deliver from '../models/Deliver';
import Recipient from '../models/Recipient';

import Mail from '../../lib/Mail';

class PackageController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number(),
      product: Yup.string().required(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    /*
     ** 1˚ Feature: cadastro de encomendas para o entregador.
     ** verificar se o recipient já existe na plataforma
     */
    const recipientExists = await Recipient.findByPk(recipient_id);

    if (!recipientExists) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    // verificar se o deliver já existe na plataforma
    const deliveryManExists = await Deliver.findByPk(deliveryman_id);

    if (!deliveryManExists) {
      return res.status(400).json({ error: 'Deliver does not exists' });
    }

    await Package.create(req.body);

    await Mail.sendMail({
      to: `${deliveryManExists.name} <${deliveryManExists.email}>`,
      subject: 'Nova entrega disponível',
      template: 'newdeliver',
      context: {
        deliver: deliveryManExists.name
      },
      attachments: [
        {
          filename: 'fastfeet.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'fastfeet.png'
          ),
          cid: 'fastfeet'
        },
        {
          filename: 'twitter.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'twitter.png'
          ),
          cid: 'twitter'
        },
        {
          filename: 'instagram.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'instagram.png'
          ),
          cid: 'instagram'
        },
        {
          filename: 'linkedin.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'linkedin.png'
          ),
          cid: 'linkedin'
        },
        {
          filename: 'youtube.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'youtube.png'
          ),
          cid: 'youtube'
        },
        {
          filename: 'fecebook.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'facebook.png'
          ),
          cid: 'facebook'
        }
      ]
    });

    return res.json({
      recipient_id,
      deliveryman_id,
      product
    });
  }

  async index(req, res) {
    const packages = await Package.findAll();

    const listOfPackages = packages.map(pkg => ({
      id: pkg.id,
      recipient_id: pkg.recipient_id,
      deliveryman_id: pkg.deliveryman_id,
      canceld_at: pkg.canceled_at,
      start_date: pkg.start_date,
      end_date: pkg.end_date
    }));

    return res.json(listOfPackages);
  }
}

export default new PackageController();
