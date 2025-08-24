const mongoose = require('mongoose');
const PrayerTimeSchema = new mongoose.Schema({
  date: Date,
  fajr: String,
  dhuhr: String,
  asr: String,
  maghrib: String,
  isha: String
});
module.exports = mongoose.model('PrayerTime', PrayerTimeSchema);
