const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/user');




// Local Strategy
passport.use(
  new LocalStrategy(
    {usernameField: 'email'}, 
    async function (email, password, done) {
      try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
          return done(null, false, { message: 'Incorrect email' });
        }

        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
  })
);


// Serialize the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});


// Serialize the user
passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id).exec();
    console.log(user)
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


// Export modules
module.exports = { passport };





