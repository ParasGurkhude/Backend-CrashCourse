const Reservation = require('../models/reservation');
const Bus = require('../models/bus');
const Passenger = require('../models/passenger');

exports.createReservation = async (req, res) => {
  try {
    const { busId, passengerId, seat_number } = req.body;
    const reservation = new Reservation({ bus: busId, passenger: passengerId, seat_number });
    await reservation.save();

    await Bus.findByIdAndUpdate(busId, { $push: { reservations: reservation._id } });
    await Passenger.findByIdAndUpdate(passengerId, { $push: { reservations: reservation._id } });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more functions for Read, Update, and Delete operations as per requirements
