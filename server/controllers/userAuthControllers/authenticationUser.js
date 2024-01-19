const { userData } = require("../../utils/userData.util");


// Check user's authentication
const userAuthentication = async (req, res) => {
  if (!req.isAuthenticated()) 
    return res.status(400).send("User is not authenticated");
  
  const user = await userData(req.user);
  return res.status(200).json(user);
};

// Export
module.exports = { userAuthentication };
