const { passport } = require('../services/passport');
const { User } = require('../models/user');
const { contacts } = require('../models/dummyData');


// Signup route
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    // New User model
    const newUser = new User({ email, password, contacts});
    await newUser.save();

    // Accessing the user profile
    const profile = newUser;

    req.login(newUser, (err) => {
      if (err) 
        return res.status(500).json({ message: 'Signup successful, but an error occurred during login' });

      console.log("Signup successful");
      res.status(200).json({ message: 'Signup successful', data: profile });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Login route
const login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ message: 'Internal Server Error' });
    if (!user) return res.status(400).json({ message: info.message });

    req.login(user, async (err) => {
      if (err) return res.status(500).json({ message: 'Internal Server Error' });

      // Accessing the user profile
      const profile = await User.findOne({ email: req.body.email });

      console.log("Login successful");
      res.status(200).json({ message: 'Login successful', data: profile });
    });
  })(req, res, next);
};



// Logout route
const logout = (req, res) => {
  req.logout((err) => {
    if (err)
      return res.status(500).json({ message: err.message});
    console.log("Logout successful");
    res.status(200).json({ message: 'Logout successful' });
  });
};



// Exports all the routes
module.exports = { signup, login, logout };
