// Import
const { 
    socketId_user,
    userId_socketId,
 } = require("./store");


// Handle Messages Read Status
function handleMessagesStatus({ socket, status }){
    console.log(status)
    const from_userId = status.from;
    const from_socketId = userId_socketId.get(from_userId);
    socket
        .to(from_socketId)
        .emit('message/status', { ...status });
}


// Export
module.exports = { handleMessagesStatus };