// Imports
const { 
  userId_socketId,
  socketId_user,
 } = require("./store");


// Handle Disconnect User
function handleDisconnectedUser({ socket }){
    const socketId = socket.id;
    const userId = socketId_user.has(socketId) && socketId_user.get(socketId).email;
    
    socketId_user.delete(socketId);
    userId_socketId.delete(userId);
    console.log("User disconnected :", userId);
  }


// Exports
module.exports = { handleDisconnectedUser };