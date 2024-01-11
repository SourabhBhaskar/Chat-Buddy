// Imports
const { User } = require("../../models/user.model");


// Update Username
const updatePicture = async (req, res) => {
  const { name, value } = req.body;

  try {
      const updatingStatus = await User.updateOne({ email: req.user.email }, { profile_picture: value });
      if(updatingStatus.modifiedCount === 0)
          throw new Error('Picture is not modified');
      else 
          return res.status(200).json({ name, value });
  } catch (error) {
      return res.status(500).json(error.message);
  }
};


// Export
module.exports = { updatePicture };
