// Import
const { userId_socketId, socketId_user } = require("./store");
const { User } = require("../models/user.model");


// Remove User
async function removeUser({ socket }){
    const socketId = socket.id;
    const userId = socketId_user.has(socketId) && socketId_user.get(socketId).email;
    
    if(userId){
        await User.updateOne({ email: userId }, { last_seen: Date.now() });
        socketId_user.delete(socketId);
        userId_socketId.delete(userId);
    }
    console.log("User disconnected :", userId);
}


// Export
module.exports = { removeUser };