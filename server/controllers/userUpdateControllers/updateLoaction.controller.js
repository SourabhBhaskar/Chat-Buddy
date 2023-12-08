// Imports
const { User } = require("../../models/user.model");


// Update Username
const updateLocation = async(req, res) => {
    const { name, value } = req.body;

    try {
        const updatingLocation = await User.updateOne({ email: req.user.email }, { location: value });
        if(updatingLocation.modifiedCount === 0)
            return res.status(500).json({ error: 'Internel Server Error' });
        else 
            return res.status(200).json({ message: `${name} Updated Successfully`, data: { name, value }});
    } catch (error) {
        return res.status(500).json({ error: 'Internel Server Error' });
    }
}


// Export
module.exports = { updateLocation };