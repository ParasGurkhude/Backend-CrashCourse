const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  bus: { type: Schema.Types.ObjectId, ref: 'Bus', required: true },
  passenger: { type: Schema.Types.ObjectId, ref: 'Passenger', required: true },
  seat_number: { type: Number, required: true },
  reservation_date: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
