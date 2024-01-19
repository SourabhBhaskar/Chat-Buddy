// Imports
const { Server } = require("socket.io");
const { handleConnectedUser } = require("./handleConnectedUser");
const { handleDisconnectedUser} = require("./handleDisconnectedUser");
const { handleMessage } = require("./handleMessage");
const { handleUserStatus } = require("./handlUserStatus");


// Socket IO Configuration
const startSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URI,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  });

  io.on('connection', (socket)=>{
    socket.on('connected', (user) => handleConnectedUser({ socket, user}));
    socket.on('disconnect', () => handleDisconnectedUser({ socket }));
  })

  return io;
}
  

// Exports
module.exports = { startSocketServer };