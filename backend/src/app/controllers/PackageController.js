import * as Yup from 'yup';
import Package from '../models/Package';

class PackageController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      delivery_man: Yup.number().required(),
      signature_id: Yup.string().required(),
      product: Yup.string().required(),
      canceled_at: Yup.date(),
      start_date: Yup.date().required(),
      end_date: Yup.date().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      recipient_id,
      delivery_man,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date
    } = req.body;

    return res.json({ ok: true });
  }
}

export default new PackageController();
