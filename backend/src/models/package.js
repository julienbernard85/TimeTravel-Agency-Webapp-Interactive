/* Base de données */
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  options: [{ type: String }]
});

module.exports = mongoose.model('Package', packageSchema);