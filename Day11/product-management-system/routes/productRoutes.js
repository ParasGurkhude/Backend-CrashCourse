const express = require('express');
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/products', createProduct);
router.get('/products/:id', readProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
