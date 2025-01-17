const express = require('express');
const { addAttendee } = require('../controllers/attendeeController');
const router = express.Router();

router.post('/', addAttendee);

module.exports = router;
