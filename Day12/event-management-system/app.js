const express = require('express');
const connectDB = require('./config/db');

const organizerRoutes = require('./routes/organizerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/organizers', organizerRoutes);
app.use('/events', eventRoutes);
app.use('/attendees', attendeeRoutes);
app.use('/registrations', registrationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
