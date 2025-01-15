const Operator = require('../models/operator');

exports.createOperator = async (req, res) => {
  try {
    const { name, contact_info } = req.body;
    const operator = new Operator({ name, contact_info });
    await operator.save();
    res.status(201).json(operator);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
