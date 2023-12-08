// Imports
const { User } = require("../../models/user.model");
const { usernameVerifier } = require("../../utils/usernameVerifier.util");


// Update Username
const updateUsername = async(req, res) => {
    const { name, value } = req.body;
    const isValidUsername = usernameVerifier(value);
    
    if(isValidUsername !== null)
        return res.status(400).json({ ...isValidUsername });

    try {
        const updatingUsername = await User.updateOne({ email: req.user.email }, { username: value });
        if(updatingUsername.modifiedCount === 0)
            return res.status(500).json({ error: 'Internel Server Error' });
        else 
            return res.status(200).json({ message: `${name} Updated Successfully`, data: { name, value }});
    } catch (error) {
        return res.status(500).json({ error: 'Internel Server Error' });
    }
}


// Export
module.exports = { updateUsername };