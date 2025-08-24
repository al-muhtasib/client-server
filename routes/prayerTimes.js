const express = require('express');
const router = express.Router();
const prayerTimeController = require('../controllers/prayerTimeController');

router.get('/', prayerTimeController.getPrayerTimes);
router.post('/', prayerTimeController.createPrayerTime);
router.get('/fetch', prayerTimeController.fetchPrayerTimes);

module.exports = router;
