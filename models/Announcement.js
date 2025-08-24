const mongoose = require('mongoose');
const AnnouncementSchema = new mongoose.Schema({
  title: String,
  message: String,
  date: Date
});
module.exports = mongoose.model('Announcement', AnnouncementSchema);
