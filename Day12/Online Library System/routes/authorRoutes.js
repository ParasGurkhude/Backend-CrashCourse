const express = require('express');
const router = express.Router();
const { addAuthor } = require('../controllers/authorController');

router.post('/', addAuthor);

module.exports = router;
