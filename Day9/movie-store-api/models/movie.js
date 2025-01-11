const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
