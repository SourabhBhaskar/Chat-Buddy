const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/add-user', async (req, res) => {
  const { userEmail, contactName, contactEmail } = req.body;

  try {
    // Find the user by email
    const userAddingContact = await User.findOne({ email: userEmail });
    if (!userAddingContact) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the email already exists in the contacts
    const contactExists = userAddingContact.contacts.all.some((contact) => contact.email === contactEmail);
    if (contactExists) {
      return res.status(400).json({ message: 'Contact with this email already exists' });
    }

    // Checking if contact already exists in the database
    let contactUser = await User.findOne({ email: contactEmail });
    if(contactUser === null) {
      contactUser = new User({ username: contactName, email: contactEmail }).getProfile();
    } else {
      contactUser = contactUser.getProfile();
      contactUser.username = contactName;
    }

    // Add contactUser to userAddingContact's contacts array
    userAddingContact.contacts.all.push(contactUser);
    await userAddingContact.save();

    // Send user data to the client
    res.json({ message: 'Contact added successfully', profiles:{ public: contactUser }});
  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
