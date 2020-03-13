import * as Yup from 'yup';
import Package from '../models/Package';

import Deliver from '../models/Deliver';
import Recipient from '../models/Recipient';

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

    const parcel = await Package.create(req.body);

    return res.json(parcel);
  }
}

export default new PackageController();
