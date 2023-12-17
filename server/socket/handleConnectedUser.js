// Imports
const { addUser } = require("./addUser");


// Handle Connected User
const handleConnectedUser = async ({ socket, user }) => {

  // Add new user
  addUser({ socket, user });
};


// Exports
module.exports = { handleConnectedUser };
