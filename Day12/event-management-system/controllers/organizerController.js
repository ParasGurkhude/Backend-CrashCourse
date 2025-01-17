const Organizer = require('../models/Organizer');

exports.addOrganizer = async (req, res) => {
    try {
        const organizer = new Organizer(req.body);
        await organizer.save();
        res.status(201).json(organizer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
