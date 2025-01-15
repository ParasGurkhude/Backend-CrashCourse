const express = require('express');
const router = express.Router();
const { createRoute } = require('../controllers/routeController');

router.post('/', createRoute);

// Add routes for Read, Update, and Delete operations

module.exports = router;
