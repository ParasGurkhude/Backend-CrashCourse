const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

mongoose.connect('mongodb://localhost:27017/productManagement', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server started on port 3000')))
  .catch(err => console.log(err));

module.exports = app;
