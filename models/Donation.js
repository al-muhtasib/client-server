const mongoose = require('mongoose');
const DonationSchema = new mongoose.Schema({
  cause: String,
  amount: Number,
  goal: Number,
  donorList: [{ name: String, amount: Number }]
});
module.exports = mongoose.model('Donation', DonationSchema);
