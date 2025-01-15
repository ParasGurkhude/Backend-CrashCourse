const express = require('express');
const { createCategory, readCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/categories', createCategory);
router.get('/categories/:id', readCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
