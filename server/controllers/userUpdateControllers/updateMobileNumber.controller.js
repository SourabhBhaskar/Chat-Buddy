// Imports
const { User } = require("../../models/user.model");


// Update Username
const updateMobileNumber = async(req, res) => {
    const { name, value } = req.body;
    
    if(isNaN(value))
        return res.status(400).json({ error: "Mobile Number should be number" });

    try {
        const updatingMobileNumber = await User.updateOne({ email: req.user.email }, { mobile_number: value });
        if(updatingMobileNumber.modifiedCount === 0)
            return res.status(500).json({ error: 'Internel Server Error' });
        else 
            return res.status(200).json({ message: `${name} Updated Successfully`, data: { name, value }});
    } catch (error) {
        return res.status(500).json({ error: 'Internel Server Error' });
    }
}


// Export
module.exports = { updateMobileNumber };