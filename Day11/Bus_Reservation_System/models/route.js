const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  start_location: { type: String, required: true },
  end_location: { type: String, required: true },
  distance: { type: Number, required: true },
  buses: [{ type: Schema.Types.ObjectId, ref: 'Bus' }]
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
