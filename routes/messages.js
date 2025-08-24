// routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Submit new message
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: 'Message submitted successfully',
      data: {
        id: newMessage._id,
        name: newMessage.name,
        email: newMessage.email
      }
    });

  } catch (error) {
    console.error('Message submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all messages (with pagination and filtering)


module.exports = router;
