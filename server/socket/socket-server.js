// Imports
const { Server } = require("socket.io");
const { socketId_userId, userId_socketId, userId_userData } = require("./store");
const { handleConnectedUser } = require("./handleConnectedUser");
const { handleDisconnectedUser} = require("./handleDisconnectedUser");
const { handleTextMessage } = require("./handleTextMessage");


// Socket IO Configuration
const startSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URI,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  });

  io.on('connection', (socket)=>{
    socket.on('message/text', (message) => handleTextMessage({ socket, message }));
    socket.on('disconnect', () => handleDisconnectedUser({ socket }));
    socket.on('connected', (user) => handleConnectedUser({ socket, user }));
  })

  return io;
}
  

// Exports
module.exports = { startSocketServer };