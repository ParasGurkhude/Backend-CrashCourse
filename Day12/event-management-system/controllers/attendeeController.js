const Attendee = require('../models/Attendee');

exports.addAttendee = async (req, res) => {
    try {
        const attendee = new Attendee(req.body);
        await attendee.save();
        res.status(201).json(attendee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
