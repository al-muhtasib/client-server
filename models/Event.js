const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  images: [String], // Cloudinary URLs
  registrations: [{ name: String, email: String }]
});
module.exports = mongoose.model('Event', EventSchema);
