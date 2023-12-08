// Imports
const { 
  userId_socketId,
  userId_messages,
 } = require("./store");

// Acknowledgement
function sendAcknowledgment({ socket, messages }){

}


// Handle Text Message
function handleTextMessage({ socket, message }){
    const from_userId = message.from;
    const to_userId = message.to;
    const to_socketId = userId_socketId.get(to_userId);

    // If receiver is online
    if(to_socketId){
      // Send message to receiver
      socket.to(to_socketId).emit('text/message', message);
      console.log(`${from_userId} sent "${message}" to ${to_userId}`);

      // Messages delivered 
      // socket.emit('messages/status', { connection: to_userId, status: 'delivered', time: Date.now() });
    }
    
    // If receiver is not online
    if(!to_socketId){
      // if(!userId_messages.has(to_userId)){
      //   userId_messages.set(to_userId, [{ ...message }]);
      // }else{
      //   userId_messages.get(to_userId).push({ ...message });
      // }
      // console.log(`${message.to} is not online`);
      // socket.emit('messages/status', { connection: to_userId, status: 'send', time: Date.now() });
    }
  
  }


// Exports
module.exports = { handleTextMessage };