// Imports
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/user.model');


// Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async function (email, password, done) {
      try {
        const user = await User.findOne({ email }, { email: 1, password: 1, _id: 0 });
        if (!user) {
          return done(null, false, { error: 'Incorrect email' });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          return done(null, false, { error: 'Incorrect password' });
        }
        
        return done(null, user);
      } catch (err) {
        console.error('Error during local strategy:', err);
        return done(err);
      }
    }
  )
);


// Serialize the user
passport.serializeUser(function (user, done) {
  done(null, user.email);
});


// Deserialize the user
passport.deserializeUser(async function (email, done) {
  try {
    const user = await User.findOne({ email }, { email: 1, password: 1 , _id: 0 });
    done(null, user);
  } catch (err) {
    console.error('Error during user deserialization:', err);
    done(err, null);
  }
});

