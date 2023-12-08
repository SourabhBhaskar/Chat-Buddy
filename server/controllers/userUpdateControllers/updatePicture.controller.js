// Imports
const { User } = require("../../models/user.model");
const { uploadOnCloudinary } = require("../../utils/cloudnary.util");
const path = require("path");
const fs = require("fs");


// Update Username
const updatePicture = async (req, res) => {
    const picture = req.file;
    const pictureId = req.user.email + "_picture";
    const filePath = path.join(__dirname, "..", "..", "uploads", picture.filename);
  
    try {
      const response = await uploadOnCloudinary(filePath, pictureId);
  
      if (response) {
        const fileUrl = response.url;
        const updatingPicture = await User.updateOne(
          { email: req.user.email },
          { profile_picture: fileUrl }
        );
  
        if (updatingPicture.modifiedCount === 0) {
          throw new Error('Failed to update user profile picture in the database.');
        } else {
          fs.unlink(filePath, () => console.log("File deleted after success"));
          return res.status(200).json({
            message: 'Profile picture updated successfully',
            data: { name: "Profile Picture", value: fileUrl },
          });
        }
      } else {
        throw new Error('Failed to upload picture to Cloudinary.');
      }
    } catch (error) {
      fs.unlink(filePath, () => console.error("File deleted after error"));
      console.error('Error updating picture:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};


// Export
module.exports = { updatePicture };
