// Imports
const { socketId_userId, userId_socketId, userId_userData, userId_messages } = require("./store");


// Handle Text Message
function handleTextMessage({ socket, message: { message, from, to }}){
    const to_socketId = userId_socketId.get(to);
    const to_userId = to;
    if(!to_socketId){
      if(userId_messages.has(to_userId)){
        userId_messages.get(to_userId).push({ message, from });
      }else
        userId_messages.set(to_userId, [{ message, from }]);
      // console.log(`${to} is not online`);
      console.log(userId_messages)
    }else{
      socket.to(to_socketId).emit('text/message', [{ message, from }]);
      console.log(`${from} sent "${message}" to ${to}`);
    }
  }


// Exports
module.exports = { handleTextMessage };