const Sermon = require('../models/Sermon');

exports.getSermons = async (req, res) => {
  try {
    const sermons = await Sermon.find();
    res.json(sermons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSermon = async (req, res) => {
  const { title, date, audioURL, videoURL } = req.body;
  try {
    const sermon = new Sermon({ title, date, audioURL, videoURL });
    await sermon.save();
    res.status(201).json(sermon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
