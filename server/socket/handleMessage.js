// Imports
const { 
  userId_socketId,
  userId_messages,
 } = require("./store");




// Handle Text Message
function handleMessage({ socket, message, cb }){
  const from_userId = message.from;
  const to_userId = message.to;
  const to_socketId = userId_socketId.get(to_userId);

  // If receiver is online
  if(to_socketId){
    socket.to(to_socketId).emit('messages', [message]);
    cb('delivered');
  }else{
  //   if(!userId_messages.has(to_userId)){
  //     userId_messages.set(to_userId, [{ ...message }]);
  //   }else{
  //     userId_messages.get(to_userId).push({ ...message });
  //   }
    cb('sent');
  }
  
}


// Exports
module.exports = { handleMessage };