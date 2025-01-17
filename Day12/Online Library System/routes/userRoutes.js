const express = require('express');
const {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Add a new user
router.post('/', addUser);

// Get all users
router.get('/', getAllUsers);

// Get a user by ID
router.get('/:userId', getUserById);

// Update a user's details
router.put('/:userId', updateUser);

// Delete a user
router.delete('/:userId', deleteUser);

module.exports = router;
