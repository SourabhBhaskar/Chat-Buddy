const { User } = require("../../models/user.model");
const { usernameVerifier } = require("../../utils/usernameVerifier.util");


const updateUsername = async(req, res) => {
    const { name, value } = req.body;
    const { error } = usernameVerifier(value);

    if(error)
        return res.status(400).json(error);

    try {
        const updatingUsername = await User.updateOne({ email: req.user.email }, { username: value });
        if(updatingUsername.modifiedCount === 0)
            throw new Error('Name is not modified');
        else 
            return res.status(200).json({ name, value });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


module.exports = { updateUsername };