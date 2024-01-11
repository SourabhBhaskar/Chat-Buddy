// Imports
const { User } = require("../../models/user.model");


// Update Username
const updateMobileNumber = async(req, res) => {
    const { name, value } = req.body;
    
    if(isNaN(value))
        return res.status(400).json("Mobile Number should be number");

    try {
        const updatingMobileNumber = await User.updateOne({ email: req.user.email }, { mobile_number: value });
        if(updatingMobileNumber.modifiedCount === 0)
            throw new Error('Mobile number is not modified');
        else 
            return res.status(200).json({ name, value });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


// Export
module.exports = { updateMobileNumber };