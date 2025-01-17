const express = require('express');
const {
  borrowBook,
  returnBook,
  getAllTransactions,
  getTransactionsByUserId,
} = require('../controllers/transactionController');

const router = express.Router();

// Borrow a book
router.post('/borrow', borrowBook);

// Return a borrowed book
router.post('/return', returnBook);

// Get all transactions
router.get('/', getAllTransactions);

// Get transactions for a specific user
router.get('/:userId', getTransactionsByUserId);

module.exports = router;
