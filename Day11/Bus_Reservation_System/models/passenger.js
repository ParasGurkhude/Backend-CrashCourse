const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }]
});

const Passenger = mongoose.model('Passenger', passengerSchema);
module.exports = Passenger;
