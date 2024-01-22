// Imports
const { Server } = require("socket.io");
const { handleConnectedUser } = require("./handleConnectedUser");
const { handleDisconnectedUser} = require("./handleDisconnectedUser");
const { handleConnectionStatus } = require("./handleConnectionStatus");
const { handleMessage } = require("./handleMessage");


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
    socket.on('connection-status', (status) => handleConnectionStatus({ socket, status }));
    socket.on('message', (message) => handleMessage({ socket, message }));
  })

  return io;
}
  

// Exports
module.exports = { startSocketServer };