/* Base de données */
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  epoch: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  media: [{ type: String }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model('Destination', destinationSchema);