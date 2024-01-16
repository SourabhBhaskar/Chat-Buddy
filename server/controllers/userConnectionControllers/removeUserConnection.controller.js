// Imports
const { User } = require("../../models/user.model");
const { convertEmail } = require("../../utils/emailConvert.util");


// Create User Contact
const removeUserConnection = async (req, res) => {
    try {
        const connectionEmail  = req.body.connectionEmail;
        const user = req.user;

        const connectionToRemove = await User.findOne({ email: connectionEmail }, { _id: 1 });
        if (!connectionToRemove) {
            return res.status(404).send("Connection not found");
        }

        const isExistInList = user.connections.all[convertEmail(connectionEmail)];
        if (!isExistInList) {
            return res.status(404).send("Contact not found in your connection list");
        }
        
        const update = await User.updateOne(
            { email: user.email },
            {
              $unset: {
                [`connections.all.${convertEmail(connectionEmail)}`]: 1
              }
            }
          );
        if(update.modifiedCount === 0)
            throw new Error("Internal Server Error");
        return res.status(204).send("Connection removed successfully");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};


// Export
module.exports = { removeUserConnection };