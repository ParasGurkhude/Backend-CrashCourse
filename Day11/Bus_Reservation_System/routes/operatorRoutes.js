const express = require('express');
const router = express.Router();
const { createOperator } = require('../controllers/operatorController');

router.post('/', createOperator);

module.exports = router;
