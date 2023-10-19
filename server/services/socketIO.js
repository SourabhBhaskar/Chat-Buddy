require('dotenv').config();
const { Server } = require("socket.io");
const { User } = require('../models/user');
const date = require('../services/date');


// Map to store online users and their sockets
const onlineUsers = new Map();


 // Handle a new socket connection.
async function handleConnection(senderId, socket) {
  try {
    // Retrieve the sender's profile from the database
    const senderProfile = await User.findOne({ email: senderId});
    console.log(senderProfile)

    // Update the last_seen field to 'online'
    senderProfile.last_seen = 'online';
    await senderProfile.save();

    // Store the sender's socket in the onlineUsers map
    onlineUsers.set(senderId, socket);
    console.log(senderId, " is online");
  } catch (error) {
    console.error('Error updating last_seen:', error);
  }
}


// Handle incoming messages and send them to the appropriate receiver.
async function handleMessages({ message, senderId, receiverId }) {
  try {
    // Retrieve the sender's profile from the database
    const senderProfile = await User.findOne({ email: senderId });

    // Create a message object
    const messageToSend = { senderProfile: senderProfile.getProfile(), message };

    if (onlineUsers.has(receiverId)) {
      const receiverSocket = onlineUsers.get(receiverId);
      receiverSocket.emit("message", messageToSend);
      console.log(`Sent message to ${receiverId}: ${messageToSend.message}`);
    } else {
      console.log(`Receiver ${receiverId} is not online`);
    }
    // Push the message to the database 
  } catch (error) {
    console.error('Error handling message:', error);
  }
}


// Handle a socket disconnection
function handleSocketExit(socket) {
  onlineUsers.forEach(async (value, key) => {
    if (value === socket) {
      try {
        // Retrieve the sender's profile from the database
        const senderProfile = await User.findOne({ email: key });

        // Update the last_seen field with the current date
        senderProfile.last_seen = date;
        await senderProfile.save();

        // Remove the user from the onlineUsers map
        onlineUsers.delete(key);
        console.log(key, " is offline");
      } catch (error) {
        console.error('Error handling socket exit:', error);
      }
    }
  });
}


// Configure the Socket.IO server and handler
function configureSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URI,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  });

  io.on('error', (error) => console.error('Socket.io error:', error));

  io.on("connection", (socket) => {
    console.log("New connection", socket.id);
    socket.on("connection", (senderId) => handleConnection(senderId, socket));
    socket.on("message", handleMessages);
    socket.on("disconnect", () => handleSocketExit(socket));
  });

  return io;
}


// Export the configureSocketIO function
module.exports = { configureSocketIO };
