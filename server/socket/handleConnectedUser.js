// Imports
const { userId_socketId, userId_messages, socketId_user } = require("./store");


// Handle Connected User
const handleConnectedUser = async ({ socket, user }) => {
  const socketId = socket.id;
  const userId = user.email;
  const updatedUser = { ...user };

  // Delete pre-existing user
  const isExist = userId_socketId.has(userId);
  if (isExist) {
    const socketIdToDelete = userId_socketId.get(userId);
    socketId_user.delete(socketIdToDelete);
  }

  // Sending message acknowledgment & bulk message to existing user 
  if (userId_messages.has(userId)) {
    const messages = userId_messages.get(userId);

    // Acknowledgement
    messages.map((message) => {
      socket
        .to(message.from)
        .emit("message/status", {
          ...message,
          status: "delivered",
          time: { ...message.time, delivered: Date.now() }
        })
      });

    // Bulk messages
    socket.emit("text/message", messages);
    userId_messages.delete(userId);
  }

  // Set new user
  socketId_user.set(socketId, updatedUser);
  userId_socketId.set(userId, socketId);
  console.log("User Connected :", userId);
};


// Exports
module.exports = { handleConnectedUser };
