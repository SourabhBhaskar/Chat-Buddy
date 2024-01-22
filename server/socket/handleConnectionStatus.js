const { User } = require("../models/user.model");
const { socketId_userId, userId_socketId } = require("./store");


const handleConnectionStatus = async ({ socket, status }) => {
    const senderId = socketId_userId.get(socket.id);
    const receiverId = status.receiverId;
    const receiverSocketId = userId_socketId.get(receiverId);

    try {
        switch(status.message || status.last_seen){
            case 'delivered':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { receiverId: senderId, message: 'delivered' });
            break;
            case 'seen':
                await User.updateOne(
                    { email: senderId }, 
                    { $set: { 'connections.$[element].messages.unSeenMsgCnt': 0 }}, 
                    { arrayFilters: [{ 'element.bio.email': receiverId }]}
                );
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { receiverId: senderId, message: 'seen' });
            break;
            case 'online':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { receiverId: senderId, message: 'online' });
            break;
            case 'typing...':
                receiverSocketId && socket.to(receiverSocketId).emit('connection-status', { receiverId: senderId, message: 'typing...' });
            break;
        }
    } catch (error) {
        console.log("Error", error.message);
    }
}


module.exports = { handleConnectionStatus };