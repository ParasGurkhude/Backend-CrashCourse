const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
  bus_number: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  operator: { type: Schema.Types.ObjectId, ref: 'Operator', required: true },
  route: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
  reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }]
});

const Bus = mongoose.model('Bus', busSchema);
module.exports = Bus;
