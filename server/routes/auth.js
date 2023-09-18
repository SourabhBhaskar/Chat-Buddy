const express = require('express');
const { passport } = require('../services/authentication');
const { User } = require('../models/auth');
const { Profile } = require('../models/profile');
const router = express.Router();


// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.send({message : 'Username is already taken'});
    }

    // User model
    const newUser = new User({ email, password });
    await newUser.save();

    // Profile model
    const newProfile = new Profile({ email: email });
    await newProfile.save();

    req.login(newUser, (err) => {
      if (err) {
        return res.send({message : 'Signup successful, but an error occurred during login'});
      }

      res.send({message : 'Signup successful'}); 
    }); 
  } catch (err) {
    res.send({ message : err.message }); 
  }
});


// Login route
router.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    req.login(user, async(err) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      const userProfile = await Profile.findOne({ email: req.body.email });
      return res.json({ message: 'Login successful', data: userProfile }); 
    });
  })(req, res, next);
});


// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.send('Error during logout: ' + err.message);
    }
    res.send('Logout successful.');
  });
});




module.exports = router;
