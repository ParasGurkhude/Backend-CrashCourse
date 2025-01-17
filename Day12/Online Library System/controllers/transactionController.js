const Transaction = require('../models/transaction');
const Book = require('../models/book');

exports.borrowBook = async (req, res) => {
  try {
    const { bookId, userId } = req.body;
    const transaction = new Transaction({ book: bookId, user: userId });
    await transaction.save();

    await Book.findByIdAndUpdate(bookId, { $set: { isBorrowed: true } });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
