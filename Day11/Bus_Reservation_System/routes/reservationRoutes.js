const express = require('express');
const router = express.Router();
const { createReservation } = require('../controllers/reservationController');

router.post('/', createReservation);

// Add routes for Read, Update, and Delete operations

module.exports = router;
