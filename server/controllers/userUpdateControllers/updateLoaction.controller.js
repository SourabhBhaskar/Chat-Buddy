// Imports
const { User } = require("../../models/user.model");


// Update Username
const updateLocation = async(req, res) => {
    const { name, value } = req.body;

    try {
        const updatingLocation = await User.updateOne({ email: req.user.email }, { location: value });
        if(updatingLocation.modifiedCount === 0)
            throw new Error('Location is not modified');
        else 
            return res.status(200).json({ name, value });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


// Export
module.exports = { updateLocation };