// Imports
const { User } = require("../../models/user.model");


// Create User Contact
const addUserConnection = async (req, res) => {
  const userEmail = req.user.email;
  const { connectionEmail, connectionMessage } = req.body;

  try {
    const connection = await User.findOne({ email: connectionEmail }, User.getUser());
    if (!connection) 
      return res.status(404).send("Connection not found on this platform");

    // Retrieve the document with the last connection
    const updatedDocument = await User.updateOne(
      { email: userEmail },
      { $addToSet: { connections: { bio: connection } } },
    );
    
    if (!updatedDocument.modifiedCount)
      return res.status(409).send("Connection already exists");

    
    // Get Newly added connections
    const newConnection = await User.findOne({ email: userEmail }, User.getNewlyAddedConnection())
    return res.status(201).json({
      ...newConnection.connections[0].toObject()
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).send("Internal Server Error");
  }
};

// Export
module.exports = { addUserConnection };
