// Imports
const { User } = require("../../models/user.model");
const passport = require("passport");


// Login route
const userLogin = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    if (!user) return res.status(400).json(info);
    
    req.login(user, async (err) => {
      if (err)
        return res.status(500).json({ error: "Internal Server Error" });

      const users = await User.find({ _id:{ $in: user.connections.all }}, { password: 0, connections: 0, groups: 0, settings: 0 });
      const updatedUser = {
        ...user.toObject(),
        connections: {
          ...user.connections,
          all: users,
        }
      }
      return res.status(200).json({ message: 'Login successful', data: updatedUser });
    });
  })(req, res, next);
};


// Export
module.exports = { userLogin };
