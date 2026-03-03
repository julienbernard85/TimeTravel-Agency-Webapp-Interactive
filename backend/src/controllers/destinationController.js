/* API */
const Destination = require('../models/destination');
const Event = require('../models/event');

exports.getAll = async (req, res) => {
  try {
    const destinations = await Destination.find().populate('events');
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id).populate('events');
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};