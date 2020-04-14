import Sequelize, { Op } from 'Sequelize';
import { parse, format } from 'date-fns';
import * as Yup from 'yup';

import Package from '../models/Package';
import Signature from '../models/Signature';

class FinishDeliverController {
  async update(req, res) {
    const schema = Yup.object().shape({
      new_end_date: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ error: 'A recipient signature is required' });
    }

    const { originalname: name, filename: path } = req.file;
    const { new_end_date } = req.body;
    const { id } = req.params;

    /* Converte a data fornecida pelo deliver em um data apropriada para ser
     * armazenada no banco de dados.
     */
    const convertedDate = parse(new_end_date, 'dd-MM-yyyy', new Date());
    const currentDate = Date(convertedDate);
    const formatedDate = format(
      new Date(currentDate),
      "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    );

    // Check if current package to deliver is with start_date: null.
    const currentPackage = await Package.findByPk(id);

    // Do not permit which packages without start date be terminated.
    if (currentPackage.start_date == null) {
      return res
        .status(400)
        .json({ error: 'Packages without start date cannot been terminated.' });
    } else if (currentPackage.end_date != null) {
      return res
        .status(400)
        .json({ error: 'This delivery alread has been terminated' });
    } else if (currentPackage.canceled_at != null) {
      return res
        .status(400)
        .json({ error: "This delivery it's canceled, do not can be done" });
    }

    // Make recipiet's signature upload.
    const signature = await Signature.create({
      name,
      path,
    });

    // Getting just id from signature table to save on table packages.
    const { id: signatureId } = signature;

    if (!signature) {
      return res
        .status(400)
        .json({ error: "Something wrong with recipient's signature" });
    }

    // Updating e finishing package deliver on table packages.
    const finishDeliver = await currentPackage.update({
      id,
      end_date: formatedDate,
      signature_id: signatureId,
    });

    const {
      recipient_id,
      deliveryman_id,
      product,
      start_date,
      end_date,
    } = currentPackage;

    return res.json({
      id,
      recipient_id,
      deliveryman_id,
      signatureId,
      product,
      start_date,
      end_date,
    });
  }
}

export default new FinishDeliverController();
