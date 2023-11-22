// Imports
const { User } = require("../../models/user.model");


// Check user's authentication
const userAuthentication = async(req, res) => {
    const user = req.user;
    if(!req.isAuthenticated()){
        return res.status(400).json({ error: "User is not authenticated"});
    }else{
        const users = await User.find({ _id:{ $in: user.connections.all }}, { password: 0, connections: 0, groups: 0, settings: 0 });
        const updatedUser = {
          ...user.toObject(),
          connections: {
            ...user.connections,
            all: users,
          }
        }
        return res.status(200).json({ message: "User is authenticated", data: updatedUser });
    }
}


// Export
module.exports = { userAuthentication };
