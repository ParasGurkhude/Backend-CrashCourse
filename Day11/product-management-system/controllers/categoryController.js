const Category = require('../models/category');
const Product = require('../models/product');

exports.createCategory = async (req, res) => {
  try {
    const { name, description, products } = req.body;
    const newCategory = new Category({ name, description, products });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('products');
    if (!category) throw new Error('Category not found');
    res.json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCategory) throw new Error('Category not found');
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) throw new Error('Category not found');
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
