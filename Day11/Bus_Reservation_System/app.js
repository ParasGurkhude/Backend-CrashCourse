const express = require('express');
const connectDB = require('./config/db');
const operatorRoutes = require('./routes/operatorRoutes');
const routeRoutes = require('./routes/routeRoutes');
const busRoutes = require('./routes/busRoutes');
const passengerRoutes = require('./routes/passengerRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/operators', operatorRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/passengers', passengerRoutes);
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
