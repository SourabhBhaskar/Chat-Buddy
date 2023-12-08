// Imports
const { User } = require("../../models/user.model");


// Update Username
const updateStatus = async(req, res) => {
    const { name, value } = req.body;

    try {
        const updatingStatus = await User.updateOne({ email: req.user.email }, { status: value });
        if(updatingStatus.modifiedCount === 0)
            return res.status(500).json({ error: 'Internel Server Error' });
        else 
            return res.status(200).json({ message: `${name} Updated Successfully`, data: { name, value }});
    } catch (error) {
        return res.status(500).json({ error: 'Internel Server Error' });
    }
}


// Export
module.exports = { updateStatus };