/* Routing */
const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/packageController');

router.get('/', getAll);

module.exports = router;