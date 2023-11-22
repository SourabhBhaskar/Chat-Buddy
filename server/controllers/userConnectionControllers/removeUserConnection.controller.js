// Imports
const { User } = require("../../models/user.model");


// Create User Contact
const removeUserConnection = async (req, res) => {
    try {
        const { email } = req.body;
        const user = req.user;

        const contactToRemove = await User.findOne({ email }, { _id: 1 });
        if (!contactToRemove) {
            return res.status(404).json({ error: "Contact not found in database" });
        }

        const contactToRemoveIndex = user.contacts.all.indexOf(contactToRemove._id);
        if (contactToRemoveIndex === -1) {
            return res.status(404).json({ error: "Contact not found in list" });
        }

        user.contacts.all.splice(contactToRemoveIndex, 1);
        await user.save();
        res.status(204).json({ message: "Contact removed successfully" });
    } catch (error) {
        console.error("Error deleting user contact:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// Export
module.exports = { removeUserConnection };