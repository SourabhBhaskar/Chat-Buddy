const { userId_socketId, socketId_userId } = require("./store");
const { User } = require("../models/user.model");


const handleConnectedUser = async ({ socket, user }) => {
  try {

    const socketId = userId_socketId.get(user.email) ;
    socketId && socketId_userId.delete(socketId);
    userId_socketId.set(user.email, socket.id);
    socketId_userId.set(socket.id, user.email);
    await User.updateOne({ email: user.email }, { $set: { last_seen: "online" }});
    socket.broadcast.emit('last-seen', user.email);
    console.log(userId_socketId, socketId_userId)
  } catch (error) {
    console.log("Error: ", error.message);
  }
};


module.exports = { handleConnectedUser };
