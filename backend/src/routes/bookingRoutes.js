/* Routing */
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { create, getByUser } = require('../controllers/bookingController');

router.post('/', auth, create);
router.get('/me', auth, getByUser);

module.exports = router;