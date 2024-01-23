const { userId_socketId, socketId_userId, userId_messages } = require("./store");
const { User } = require("../models/user.model");


const handleConnectedUser = async ({ socket, user }) => {
  try {
    const response = await User.updateOne({ email: user.email }, { $set: { last_seen: "Online" }});
    // if(response.modifiedCount){
      const socketId = userId_socketId.get(user.email);
      socketId && socketId_userId.delete(socketId);
      userId_socketId.set(user.email, socket.id);
      socketId_userId.set(socket.id, user.email);
      socket.broadcast.emit('connection-status', { name: "last_seen", value: { receiverId: user.email, last_seen: "Online" }});

      if(userId_messages.has(user.email)){
        const messages = userId_messages.get(user.email);
        for(let i=0; i<messages.length; i++){
          const fromSocketId = userId_socketId.get(messages[i].from);
          socket.to(fromSocketId).emit("connection-status", { name: "message", value: { ...messages[i], status: "delivered", time: { ...messages[i].time, delivered: Date.now() } } });
          socket.emit("message", messages[i]);
        }
        userId_messages.delete(user.email);
        // console.log("Messages :", userId_messages);
      }
      // console.log("Connected :", socketId_userId, userId_socketId);
    // }
  } catch (error) {
    console.log("Error: ", error.message);
  }
};


module.exports = { handleConnectedUser };
