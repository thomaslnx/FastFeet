import DeliveryProblem from '../models/DeliveryProblem';

class ListDeliveryProblemController {
  async index(req, res) {
    const allProblems = await DeliveryProblem.findAll();

    const problems = allProblems.map((item) => ({
      id: item.id,
      description: item.description,
    }));

    return res.json(problems);
  }

  async show(req, res) {
    const { id } = req.params;

    const parcelProblem = await DeliveryProblem.findOne({
      where: {
        id,
      },
    });

    const { description } = parcelProblem;

    return res.json({ id, description });
  }
}

export default new ListDeliveryProblemController();
