// Imports
const { socketId_userId, userId_socketId, userId_userData } = require("./store");


// Handle Disconnect User
function handleDisconnectedUser({ socket }){
    const socketId = socket.id;
    const userId = socketId_userId.get(socketId);
  
    socketId_userId.delete(socketId);
    userId_socketId.delete(userId);
    userId_userData.delete(userId);
    console.log("User disconnected :", userId);
  }


// Exports
module.exports = { handleDisconnectedUser };