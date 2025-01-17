const Registration = require('../models/Registration');

exports.registerForEvent = async (req, res) => {
    try {
        const { event, attendee } = req.body;
        const existing = await Registration.findOne({ event, attendee });
        if (existing) {
            return res.status(400).json({ error: 'Attendee already registered for this event' });
        }
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
