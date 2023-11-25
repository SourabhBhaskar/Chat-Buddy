// Imports
const { 
  socketId_userId, 
  userId_socketId, 
  userId_userData,
  userId_messages
 } = require("./store");


// Handle Connected User
const handleConnectedUser = async({ socket, user }) => {
    const socketId = socket.id;
    const userId = user.email;
    const userData = user;
  
    let isExistAlready = userId_socketId.has(userId)
    if(isExistAlready){
      const socketIdToDelete = userId_socketId.get(userId);
      socketId_userId.delete(socketIdToDelete);
    }
  
    if(userId_messages.has(userId)){
      const messages = userId_messages.get(userId);
      socket.emit('text/message', messages);
      userId_messages.delete(userId);
      console.log("sent to ", userId, messages)
    }

    socketId_userId.set(socketId, userId);
    userId_socketId.set(userId, socketId);
    userId_userData.set(userId, userData);
    console.log("User Connected :", userId);
  }


  // Exports
  module.exports = { handleConnectedUser };