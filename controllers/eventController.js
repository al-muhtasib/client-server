const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.rsvpEvent = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const event = await Event.findById(id);
    event.registrations.push({ name, email });
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
