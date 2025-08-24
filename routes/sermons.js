const express = require('express');
const router = express.Router();
const sermonController = require('../controllers/sermonController');

router.get('/', sermonController.getSermons);
router.post('/', sermonController.createSermon);

module.exports = router;
