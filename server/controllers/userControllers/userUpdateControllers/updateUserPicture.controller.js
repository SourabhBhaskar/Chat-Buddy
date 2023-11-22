// Imports
const fs = require("fs");
const path = require("path");
const { uploadOnCloudinary } = require("../../../utils/cloudnary.util");

// User Profile Picture
const updateUserPicture = async (req, res) => {
    console.log(req.user)
    // const uploadedFile = req.file;

    // if(!uploadedFile) {
    //     return res.status(400).json({ message: 'File not uploaded' });
    // }

    // const fileName = uploadedFile.originalname;
    // const fileFormat = path.extname(fileName).toLocaleLowerCase();
    // const filePath = uploadedFile.path;
    // if(fileFormat !== '.jpeg' && fileFormat !== '.jpg') {
    //     fs.unlinkSync(filePath);
    //     return res.status(400).json({ message: 'File is not compatible' });
    // }

    // try {
    //     const cloudinaryResponse = await uploadOnCloudinary(uploadedFile.path);
    //     if (cloudinaryResponse) {
    //         console.log('File uploaded to Cloudinary:', cloudinaryResponse);
    //         return res.status(200).json({ message: 'File uploaded successfully', url:'' });
    //     } else {
    //         fs.unlinkSync(filePath);
    //         return res.status(500).json({ message: 'Failed to upload file to Cloudinary' });
    //     }
    // } catch (error) {
    //     console.error('Error uploading file to Cloudinary:', error);
    //     fs.unlinkSync(filePath);
    //     return res.status(500).json({ message: 'Internal Server Error' });
    // }
};

// Export
module.exports = { updateUserPicture };