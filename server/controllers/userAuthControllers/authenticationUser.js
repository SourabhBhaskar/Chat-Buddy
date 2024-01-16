// Imports
const { constants } = require("crypto");
const { User } = require("../../models/user.model");
const { convertEmail, convertBackEmail } = require("../../utils/emailConvert.util");


// Check user's authentication
const userAuthentication = async (req, res) => {
  const user = req.user;

  if (!req.isAuthenticated()) {
    return res.status(400).send("User is not authenticated");
  } else {
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

    return res
      .status(200)
      .json(updatedUser);
  }
};

// Export
module.exports = { userAuthentication };
