const Passenger = require('../models/passenger');

exports.createPassenger = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const passenger = new Passenger({ name, email, phone });
    await passenger.save();
    res.status(201).json(passenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more functions for Read, Update, and Delete operations as per requirements
