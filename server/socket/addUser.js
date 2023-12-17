// Import
const { userId_socketId, socketId_user } = require("./store");
const { User } = require("../models/user.model");


// Add User
async function addUser({ socket, user }){
  const socketId = socket.id;
  const userId = user.email;

  // Delete pre-existing user
  const isExist = userId_socketId.has(userId);
  if (isExist) {
    const socketIdToDelete = userId_socketId.get(userId);
    socketId_user.delete(socketIdToDelete);
  }

  try {
    const userData = await User.findOne({ email: userId }, { _id: 0, __v: 0, connections: 0, password: 0, groups: 0, settings: 0 });
    socketId_user.set(socketId, userData);
    userId_socketId.set(userId, socketId);
    console.log("User Connected :", userId);
  } catch (error) {
    console.log("Error while adding user", error);
  }
}


// Export
module.exports = { addUser };