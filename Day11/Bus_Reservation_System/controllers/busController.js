const Bus = require('../models/bus');
const Operator = require('../models/operator');
const Route = require('../models/route');

exports.createBus = async (req, res) => {
  try {
    const { bus_number, capacity, operatorId, routeId } = req.body;
    const bus = new Bus({ bus_number, capacity, operator: operatorId, route: routeId });
    await bus.save();

    await Operator.findByIdAndUpdate(operatorId, { $push: { buses: bus._id } });
    await Route.findByIdAndUpdate(routeId, { $push: { buses: bus._id } });

    res.status(201).json(bus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more functions for Read, Update, and Delete operations as per requirements
