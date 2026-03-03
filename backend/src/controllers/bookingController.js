/* API */
const Booking = require('../models/booking');

exports.create = async (req, res) => {
  const { packageId } = req.body;
  try {
    const booking = new Booking({ userId: req.user, packageId, status: 'Pending' });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user }).populate('packageId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};