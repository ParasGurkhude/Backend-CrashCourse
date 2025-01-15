const express = require('express');
const router = express.Router();
const { createBus } = require('../controllers/busController');

router.post('/', createBus);

// Add routes for Read, Update, and Delete operations

module.exports = router;
