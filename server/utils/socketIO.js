// require('dotenv').config();
// const { Server } = require("socket.io");
// // const { User } = require('../models/user');
// // const getCurrentDateTime = require('../services/date');

// // Maps for sockets and data
// const socketId_to_userData = new Map();
// const socketId_to_userId = new Map();
// const userId_to_socketId = new Map();

// // Handle incoming messages and send them to the appropriate receiverSocketId.
// function handleMessages({ message, receiverId }, socket) {
//   // const senderSocketId = socket.id;
//   // const receiverSocketId = userId_to_socketId.get(receiverId);

//   // if (receiverSocketId) {
//   //   const data = socketId_to_userData.get(senderSocketId);
//   //   const updatedMessage = { message, sender: data };
//   //   socket.to(receiverSocketId).emit("messages", updatedMessage);
//   //   console.log(`Message sent to ${receiverId} : ${message}`);
//   // } else {
//   //   console.log(`${receiverId} is not online`);
//   // }
// }

// // Handle user typing
// function handleTyping(receiver, socket) {
//   // const senderSocketId = socket.id;
//   // const receiverSocketId = userId_to_socketId.get(receiver);
//   // if (receiverSocketId) {
//   //   const userId = socketId_to_userId.get(senderSocketId);
//   //   socket.to(receiverSocketId).emit('typing', userId);
//   //   console.log(`${userId} Typing........ for ${receiver}`);
//   // } else {
//   //   console.log(`${receiver} is not online`);
//   // }
// }

// // Update user
// async function updateUser(user, socketId, update) {
//   // const userId = socketId_to_userId.get(socketId);

//   // if (userId) {
//   //   user.last_seen = update ? 'online' : getCurrentDateTime().custom_date;
//   //   await user.save();
//   // }
// }

// // Handle a new socket connection.
// async function handleConnectUser(userId, socket) {
//   // const socketId = socket.id;
//   // socket.broadcast.emit('last-seen', { userId, lastSeen: 'online' });
//   // console.log(`Connected: ${userId} => ${socketId}`);

//   // try {
//   //   const user = await User.findOne({ email: userId });

//   //   if (user) {
//   //     const userData = user.getContactData();
//   //     socketId_to_userData.set(socketId, userData);
//   //     socketId_to_userId.set(socketId, userId);
//   //     userId_to_socketId.set(userId, socketId);

//   //     updateUser(user, socketId, true);
//   //   }
//   // } catch (error) {
//   //   console.error(`Error in data fetching: ${error}`);
//   // }
// }

// // Handle a socket disconnection
// async function handleDisconnectToUser(userId, socket) {
//   // const socketId = socket.id;
//   // socket.broadcast.emit('last-seen', { userId, lastSeen: getCurrentDateTime().custom_time });
//   // console.log(`Disconnected: ${userId} => ${socketId}`);

//   // try {
//   //   const user = await User.findOne({ email: userId });

//   //   if (user) {
//   //     updateUser(user, socketId, false);

//   //     socketId_to_userData.delete(socketId);
//   //     socketId_to_userId.delete(socketId);
//   //     userId_to_socketId.delete(userId);
//   //   }
//   // } catch (error) {
//   //   console.error(`Error in data fetching: ${error}`);
//   // }
// }

// // Configure the Socket.IO server and handler
// function configureSocketIO(server) {
//   console.log("socket")
//   const io = new Server(server, {
//     cors: {
//       origin: process.env.CLIENT_URI,
//       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     }
//   });

//   });

//   return io;
// }

// module.exports = { configureSocketIO };
