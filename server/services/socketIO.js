require('dotenv').config();
const { Server } = require("socket.io");
const { User } = require('../models/user');
const time = require('../services/date');
const onlineUser = new Map();


// Socket New Connection
async function handleNewConnection(senderId, socket) {
  try {
    const senderProfile = await User.findOne({ email: senderId });
    senderProfile.last_seen = { date: 'online', time: undefined };
    await senderProfile.save();
    onlineUser.set(senderId, socket);
    socket.broadcast.emit("update-user-profile", { action: "LAST_SEEN", payload: { senderId: senderId, last_seen: "online" } });
    console.log(senderId, " is online");
  } catch (error) {
    console.error('Error updating last_seen:', error);
  }
}


// Socket Message Handler
async function handleMessages({ message, senderId, receiverId }){
  const senderProfile = await User.findOne({ email: senderId });
  const messageToSend = { senderProfile: senderProfile.getProfile(), message: message };

  if (onlineUser.has(receiverId)) {
    const receiverSocket = onlineUser.get(receiverId);
    receiverSocket.emit("message", messageToSend);
    console.log(`Sent message to ${receiverId}: ${messageToSend.message}`);
  } else {
    console.log(`Receiver ${receiverId} is not online`);
  }
}

// Socket Exit Handler 
function handleSocketExit(socket){
  onlineUser.forEach(async(value, key) => {
    if(value === socket){ 
      const senderProfile = await User.findOne({ email: key });
      senderProfile.last_seen = time;
      await senderProfile.save();
      onlineUser.delete(key);
      socket.broadcast.emit("update-user-profile", { action: "LAST_SEEN", payload: { senderId: senderId, last_seen: time } });
      console.log(key, " is offline");
    }
  });
}



// SocketIO Configuration
function configureSocketIO(server) {

  // Cors configuration
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URI,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  });

  // Event for error
  io.on('error', (error) => console.error('Socket.io error:', error));  

  // Event for new socket connection
  io.on("connection", (socket) => {
    // New connection
    socket.on("new-connection", (senderId) => handleNewConnection(senderId, socket));

    // Message
    socket.on("message", handleMessages);

    // Exit
    socket.on("disconnect", () => handleSocketExit(socket));
  });

  return io;
}


// Exporting Modules
module.exports = { configureSocketIO };
