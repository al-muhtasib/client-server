const Donation = require('../models/Donation');

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDonation = async (req, res) => {
  const { cause, amount, name } = req.body;
  try {
    let donation = await Donation.findOne({ cause });
    if (!donation) donation = new Donation({ cause, goal: 10000, amount: 0, donorList: [] });
    donation.amount += amount;
    donation.donorList.push({ name, amount });
    await donation.save();
    res.json(donation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
