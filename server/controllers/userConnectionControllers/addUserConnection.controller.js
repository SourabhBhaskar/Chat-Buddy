// Imports
const { User } = require("../../models/user.model");


// Create User Contact
const addUserConnection = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const userId = req.user._id;
        const connectionEmail = req.body.email;
        const connectionMessage = req.body.message;

        // Check, Is connection exists in database
        const connection = await User.findOne({ email: connectionEmail }, { password: 0, connections: 0, groups: 0, settings: 0 });
        if (!connection) {
            return res.status(404).json({ error: "Connection not found in database" });
        }

        // Add new connection to user
        const addingNewConnection = await User.updateOne({ _id: userId }, { $addToSet: { "connections.all" : connection._id } })
        if(!addingNewConnection.modifiedCount)
            return res.status(409).json({ error: "User already exists" });

        return  res.status(201).json({ message: "Connection added successfully", data: connection });
    } catch (error) {
        console.error("Error creating user contact:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


// Export
module.exports = { addUserConnection };