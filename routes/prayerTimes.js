const express = require('express');
const router = express.Router();
const prayerTimeController = require('../controllers/prayerTimeController');

router.get('/', prayerTimeController.getPrayerTimes);
router.get('/fetch', prayerTimeController.fetchPrayerTimes);

module.exports = router;
