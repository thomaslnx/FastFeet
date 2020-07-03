import * as Yup from 'yup';
import { Op } from 'Sequelize'
import Package from '../models/Package';

import Deliver from '../models/Deliver';
import Recipient from '../models/Recipient';

import DeliverMail from '../jobs/DeliverMail';
import Queue from '../../lib/Queue';

class PackageController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number(),
      product: Yup.string().required(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
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

    await Queue.add(DeliverMail.key, {
      deliveryManExists,
      product,
    });

    return res.json({
      recipient_id,
      deliveryman_id,
      product,
    });
  }

  async index(req, res) {
    let search;

    if (req.query.q) {
      search = req.query.q;

      const parcel = await Package.findAll({
        where: {
          product:{
             [Op.iLike]: `${search}%`
          }
        }
      })

      return res.json(parcel);
    } else {

      const parcel = await Package.findAll({
        where: {
          canceled_at: null,
        },
      });

      return res.json(parcel);

    }


    const listOfPackages = packages.map((pkg) => ({
      id: pkg.id,
      recipient_id: pkg.recipient_id,
      deliveryman_id: pkg.deliveryman_id,
      product: pkg.product,
      canceld_at: pkg.canceled_at,
      start_date: pkg.start_date,
      end_date: pkg.end_date,
    }));

    return res.json(listOfPackages);
  }

  async update(req, res) {
    const { id } = req.params;
    const { newPackage } = req.body;

    const packageExist = await Package.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'recipient_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
    });

    console.log(packageExist);

    if (!packageExist) {
      return res.status(400).json({ error: 'Packages does not exists' });
    }

    await packageExist.update({
      product: newPackage,
    });

    return res.json(packageExist);
  }

  async delete(req, res) {
    const { id } = req.params;

    const product = await Package.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: 'Package not found!' });
    }

    await product.destroy(id);

    return res.json({ message: 'Package removed successufuly' });
  }
}

export default new PackageController();
