// Imports
const { removeUser } = require("./removUser");


// Handle Disconnect User
function handleDisconnectedUser({ socket }){
  removeUser({ socket });
}


// Exports
module.exports = { handleDisconnectedUser };