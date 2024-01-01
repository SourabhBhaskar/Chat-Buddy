const { userId_socketId, socketId_user } = require("./store");
const { User } = require("../models/user.model");


async function handleUserStatus({ socket, emailId }){
    const socketId = userId_socketId.get(emailId);
    if(socketId){
        const userData = socketId_user.get(socketId);
        socket.emit('user/status', { userEmail: emailId, status: userData.last_seen });
    }else{
        try {
            const user = await User.findOne({ email: emailId }).exec();
            if(user){
                socket.emit('user/status', { userEmail: user.email, status: user.last_seen });
            }
        } catch (error) {
            console.log("Error");
        }
    }
}


module.exports = { handleUserStatus };