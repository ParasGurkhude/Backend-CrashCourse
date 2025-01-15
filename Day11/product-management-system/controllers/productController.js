const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, stock } = req.body;
    const newProduct = new Product({ name, price, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) throw new Error('Product not found');
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) throw new Error('Product not found');
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) throw new Error('Product not found');
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
