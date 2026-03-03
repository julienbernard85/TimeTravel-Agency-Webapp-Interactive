/* Configuration */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const destinationRoutes = require('./src/routes/destinationRoutes');
const userRoutes = require('./src/routes/userRoutes');
const packageRoutes = require('./src/routes/packageRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

/* Routing */
app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});