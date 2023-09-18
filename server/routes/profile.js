const express = require('express');
const router = express.Router();
const { Profile } = require('../models/profile');

router.post('/add-contact', async (req, res) => {
  const { user, name, email } = req.body;

  try {
    // Find the user profile by email
    const userProfile = await Profile.findOne({ email: user });
    if (!userProfile) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the email already exists in the contactList
    const contactExists = userProfile.contactList.some(contact => contact.email === email);
    if (contactExists) {
      return res.status(400).json({ message: 'Contact with this email already exists' });
    }

    // Push the new contact to the contactList
    userProfile.contactList.push({ name, email });
    await userProfile.save();

    // Checking if user already exists in the database
    let data = await Profile.findOne({ email: email });
    if (data === null) {
       data = { name: name, email: email, messages: [] };
    }else{
        data = {
            name: data.username ? data.username : '',
            email: data.email ? data.email : '',
            profilePic: data.profilePic ? data.profilePic : '',
            status: data.status ? data.status : '',
            messages: []
        };
    }

    res.json({ message: 'Contact added successfully', data: data });
  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
