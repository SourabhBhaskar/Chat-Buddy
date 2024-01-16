// Imports
const { User } = require("../../models/user.model");
const { convertBackEmail } = require("../../utils/emailConvert.util");
const passport = require("passport");


// Login route
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // Email & Password Validation
  if(!email) return res.status(400).send("Email is not provided" );
  if(!password) return res.status(400).send("Password is not provided");

  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send("Internal Server Error");
    if (!user) return res.status(400).send(info.error);
    
    req.login(user, async (err) => {
      if (err)
        return res.status(500).send("Internal Server Error");

        const connections = user.connections.all;

        for(let key in connections){
          connections[convertBackEmail(key)] = connections[key];
          delete connections[key];
        }
    
        // Getting User's Data
        const users = await User.find(
          { email: { $in: Object.keys(connections) } },
          { _id: 0, __v: 0, password: 0, connections: 0, groups: 0, settings: 0 }
        );
    
        // Updating Connections
        users.forEach((user) => {
          connections[user.email] = { ...connections[user.email], ...user.toObject() };
        });
    
        const updatedUser = {
          ...user.toObject(),
          connections: {
            ...user.connections,
            all: connections,
          },
        };
      
      return res.status(200).json(updatedUser);
    });
  })(req, res, next);
};


// Export
module.exports = { userLogin };
