import DeliveryProblem from '../models/DeliveryProblem';
import Package from '../models/Package';

class ListDeliveryProblemController {
  // Listar todos as entregas com algum problema.
  async index(req, res) {
    const allProblems = await DeliveryProblem.findAll();

    const problems = allProblems.map((item) => ({
      id: item.id,
      description: item.description,
    }));

    return res.json(problems);
  }

  // Listar problema na entrega baseada no ID da entrega
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

  // Cancelar entrega devido à gravidade do problema do entregador.
  async update(req, res) {
    const { packageId } = req.params;

    const parcelToCancel = await DeliveryProblem.findOne({
      where: {
        id: packageId,
      },
      include: [
        {
          model: Package,
          attributes: [
            'id',
            'recipient_id',
            'deliveryman_id',
            'signature_id',
            'product',
            'canceled_at',
            'start_date',
            'end_date',
          ],
        },
      ],
    });

    const canceledParcel = await parcelToCancel.Package.update({
      canceled_at: new Date(),
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
    });

    return res.json(canceledParcel);
  }
}

export default new ListDeliveryProblemController();
