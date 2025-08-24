const mongoose = require('mongoose');
const SermonSchema = new mongoose.Schema({
  title: String,
  date: Date,
  audioURL: String, // Cloudinary URL
  videoURL: String // Cloudinary URL
});
module.exports = mongoose.model('Sermon', SermonSchema);
