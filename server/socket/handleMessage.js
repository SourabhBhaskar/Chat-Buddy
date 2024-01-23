const { userId_socketId, socketId_userId, userId_messages } = require("./store");


const handleMessage = ({ socket, message, cb }) => {
    const from = message.from;
    const to = message.to;
    const fromSocketId = socket.id;
    const toSocketId = userId_socketId.get(message.to);

    message.status = 'sent';
    message.time.sent = Date.now();
    if(toSocketId){
        message.status = 'delivered';
        message.time.delivered = Date.now();
        socket.to(toSocketId).emit("message", message);
    }else{
        if(userId_messages.has(to)) userId_messages.set(to, userId_messages.get(to).concat(message));
        else userId_messages.set(to, [message]);
        // console.log(userId_messages);
    }
    cb({ id: message.id, status: message.status, time: message.time, to: message.to });                                                                                             
}


module.exports = { handleMessage };