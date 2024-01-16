// Imports
const { User } = require("../../models/user.model");
const { convertEmail } = require("../../utils/emailConvert.util");

// Create User Contact
const addUserConnection = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const { connectionEmail, connectionMessage } = req.body;
    
    const connection = await User.findOne(
      { email: connectionEmail },
      { __v: 0, password: 0, connections: 0, groups: 0, settings: 0 }
    );

    if (!connection) {
      return res
        .status(404)
        .send("Connection not found on this platform");
    }

    // Add new connection to user
    const addingNewConnection = await User.updateOne(
      { email: userEmail },
      {
        $set: {
          [`connections.all.${convertEmail(connectionEmail)}`]: {
            isSeen: true,
            unSeenMsgCnt: 0,
            messages: [],
            notifications: true,
            isBlocked: false,
            isFavorite: false,
          },
        },
      }
    );

    if (!addingNewConnection.modifiedCount)
      return res.status(409).send("Connection already exists");

    return res.status(201).json({
      ...connection.toObject(),
      isSeen: true,
      unSeenMsgCnt: 0,
      messages: [],
      notifications: true,
      isBlocked: false,
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

// Export
module.exports = { addUserConnection };
