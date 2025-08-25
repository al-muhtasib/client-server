require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors({
  origin: 'https://al-masjid-22fc7.web.app', // Your frontend URL
  credentials: true, // Allow cookies/auth headers if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

app.use('/api/events', require('./routes/events'));
app.use('/api/prayerTimes', require('./routes/prayerTimes'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/sermons', require('./routes/sermons'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/messages', require('./routes/messages'));
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
