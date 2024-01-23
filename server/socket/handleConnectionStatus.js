const { socketId_userId, userId_socketId } = require("./store");


const handleConnectionStatus = async ({ socket, status }) => {
    const { name, value } = status;
    const senderId = socketId_userId.get(socket.id);
    const receiverId = value.receiverId || value.to;
    const receiverSocketId = userId_socketId.get(receiverId);

    try {
        switch(name){
            case 'seen':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { name: "seen", value: { receiverId: senderId }});
            break;
            case 'online':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { name: "online", value: { receiverId: senderId }});
            break;
            case 'typing...':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { name: "typing...", value: { receiverId: senderId }});
            break;
            case 'message': 
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { name: 'message', value: { ...value, to: senderId }});
                break;
        }
    } catch (error) {
        console.log("Error", error.message);
    }
}


module.exports = { handleConnectionStatus };