const express = require('express');
const router = express.Router();
const { createPassenger } = require('../controllers/passengerController');

router.post('/', createPassenger);

// Add routes for Read, Update, and Delete operations

module.exports = router;
