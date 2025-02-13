const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/api', movieRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
