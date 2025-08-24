const Sermon = require('../models/Sermon');

exports.getSermons = async (req, res) => {
  try {
    const sermons = await Sermon.find();
    res.json(sermons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

