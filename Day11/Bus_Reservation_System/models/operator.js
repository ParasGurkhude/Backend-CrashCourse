const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operatorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  contact_info: { type: String, required: true },
  buses: [{ type: Schema.Types.ObjectId, ref: 'Bus' }]
});

const Operator = mongoose.model('Operator', operatorSchema);
module.exports = Operator;
