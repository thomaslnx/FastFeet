import Deliver from '../models/Deliver';

class DeliverController {
  async store(req, res) {
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

  async index(req, res) {
    const delivers = await Deliver.findAll();

    // const [name, avatar_id, email] = delivers.Deliver.dataValues;
    // console.log(delivers);

    return res.json(delivers);
  }

  async update(req, res) {
    const { name, avatar_id, email } = req.body;

    if (!req.query.id) {
      return res.status(400).json({ error: 'Deliver does not exists' });
    }
  }
}

export default new DeliverController();
