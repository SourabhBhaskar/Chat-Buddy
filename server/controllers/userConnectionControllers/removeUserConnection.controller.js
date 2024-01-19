// Imports
const { User } = require("../../models/user.model");

// Create User Contact
const removeUserConnection = async (req, res) => {
    try {
        const connectionEmail  = req.body.connectionEmail;
        const user = req.user;

        const connectionToRemove = await User.findOne({ email: connectionEmail }, { _id: 1 });
        if (!connectionToRemove) {
            return res.status(404).send("Connection not found on ChatBuddy");
        }
        
        const update = await User.updateOne(
            { email: user.email },
            {
                $pull: {
                    connections: { 'bio.email': connectionEmail }
                }
            }
          );
        
        if(update.modifiedCount === 0)
            return res.status(404).send("Connection not found in connection list");

        return res.status(204).send("Connection removed successfully");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};


// Export
module.exports = { removeUserConnection };