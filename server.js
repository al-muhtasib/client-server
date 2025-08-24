require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/events', require('./routes/events'));
app.use('/api/prayerTimes', require('./routes/prayerTimes'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/sermons', require('./routes/sermons'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/messages', require('./routes/messages'));
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
