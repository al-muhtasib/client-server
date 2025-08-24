const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEvent = async (req, res) => {
  const { title, date, description, images } = req.body;
  try {
    const event = new Event({ title, date, description, images });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
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
