const express = require('express');
const { addEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/', addEvent);

module.exports = router;
