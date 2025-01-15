const Route = require('../models/route');

exports.createRoute = async (req, res) => {
  try {
    const { start_location, end_location, distance } = req.body;
    const route = new Route({ start_location, end_location, distance });
    await route.save();
    res.status(201).json(route);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more functions for Read, Update, and Delete operations as per requirements
