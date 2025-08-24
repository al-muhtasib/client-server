const PrayerTime = require('../models/PrayerTime');
const axios = require('axios');

exports.getPrayerTimes = async (req, res) => {
  try {
    const prayerTimes = await PrayerTime.find();
    res.json(prayerTimes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPrayerTime = async (req, res) => {
  const { date, fajr, dhuhr, asr, maghrib, isha } = req.body;
  try {
    const prayerTime = new PrayerTime({ date, fajr, dhuhr, asr, maghrib, isha });
    await prayerTime.save();
    res.status(201).json(prayerTime);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.fetchPrayerTimes = async (req, res) => {
  try {
    const response = await axios.get('http://api.aladhan.com/v1/timingsByCity', {
      params: {
        city: 'London', // Replace with your city
        country: 'UK', // Replace with your country
        method: 2 // Islamic Society of North America (ISNA)
      }
    });
    const timings = response.data.data.timings;
    res.json(timings);
  } catch (err) {
    console.error('Aladhan API Error:', err.response ? err.response.data : err.message);
    res.status(500).json({ message: 'Failed to fetch prayer times from Aladhan API' });
  }
};
