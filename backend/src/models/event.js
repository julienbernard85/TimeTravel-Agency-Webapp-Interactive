/* Base de données */
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  media: [{ type: String }],
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true }
});

module.exports = mongoose.model('Event', eventSchema);