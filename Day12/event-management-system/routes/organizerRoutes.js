const express = require('express');
const { addOrganizer } = require('../controllers/organizerController');
const router = express.Router();

router.post('/', addOrganizer);

module.exports = router;
