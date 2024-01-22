const { socketId_userId, userId_socketId } = require("./store");
const { User } = require("../models/user.model");


// Handle Disconnect User
async function handleDisconnectedUser({ socket }){
  try {
    const userId = socketId_userId.get(socket.id);
    userId_socketId.delete(userId);
    socketId_userId.delete(socket.id);
    await User.updateOne({ email: userId }, { $set: { last_seen: Date.now() }});
    socket.broadcast.emit('connection-status', { receiverId: userId, last_seen: Date.now() });
    console.log("Disconnected :", socketId_userId, userId_socketId);
  } catch (error) {
    console.log("Error:", error.message);
  }
}


// Exports
module.exports = { handleDisconnectedUser };