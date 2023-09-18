require('dotenv').config();
const cors = require("cors");
const { Server } = require("socket.io");
const { User } = require('../models/user');
const onlineUser = new Map();



// SocketIO Configuration
function configureSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URI,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  });

  io.on('error', (error) => {
    console.error('Socket.io error:', error);
  });  

  io.on("connection", (socket) => {
    const socketId = socket.id;
    console.log("new socket", socketId);

    // Welcome
    socket.on("new-connection", (senderId) => {
      console.log("new connection", senderId, socketId);
      onlineUser.set(senderId, socket);
      console.log(onlineUser);
    });

    // Message
    socket.on("message", async(message, from, to) => {
      console.log(message, to, from);
      const UserProfile = await User.findOne({ email: from });
      const senderId = from;
      const receiverId = to;
      const msg = { senderProfile: UserProfile.getProfile(), message: message };

      // Check if the receiver is online
      if (onlineUser.has(receiverId)) {
        const receiverSocket = onlineUser.get(receiverId);
        console.log(receiverSocket.id);
        receiverSocket.emit("message", msg);
        console.log(`Sent message to ${receiverId}: ${msg.message}`);
      } else {
        console.log(`Receiver ${receiverId} is not online`);
      }
    });

    // Exit
    socket.on("disconnect", () => {
      // Remove the socket from the onlineUser Map when it disconnects
      onlineUser.forEach((value, key) => {
        if (value === socket) {
          onlineUser.delete(key);
        }
      });
      console.log(onlineUser);
    });
  });

  return io;
}

// Exporting Modules
module.exports = { configureSocketIO };
