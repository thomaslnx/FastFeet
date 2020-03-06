import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const userAlreadExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (userAlreadExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, email, password_hash } = await User.create(req.body);

    return res.json({
      id,
      email,
      password_hash
    });
  }
}

export default new UserController();
