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
    socket.on('connected', (user, cb) => handleConnectedUser({ socket, user, cb }));
    socket.on('disconnect', (cb) => handleDisconnectedUser({ socket, cb }));
    socket.on('message', (message, cb) => handleMessage({ socket, message, cb }));
    socket.on('user/status', (emailId) => handleUserStatus({ socket, emailId }));
  })

  return io;
}
  

// Exports
module.exports = { startSocketServer };