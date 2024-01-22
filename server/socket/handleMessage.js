const { userId_socketId, socketId_userId } = require("./store");


const handleMessage = ({ socket, message }) => {
    const fromSocketId = socket.id;
    const toSocketId = userId_socketId.get(message.to);
    
    socket.emit("connection-status", { receiverId: message.to, message: "sent" });
    if(toSocketId){
        socket.to(toSocketId).emit("message", message);
    }else{
        console.log(message)
    }
}


module.exports = { handleMessage };