// Imports
require('dotenv').config()
const cloudinary = require('cloudinary').v2;


// Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_NAME,  
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET
});


// Upload on Cloudinary
const uploadOnCloudinary = async (localFilePath, publicId) => {
    try {
        if (!localFilePath) return null;
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            public_id: publicId
        });

        return response;
    } catch (error) {
        console.error('Error uploading file on Cloudinary:', error);
        return null;
    }
};


// Delete on Cloudinary
const deleteOnCloudinary = async (publicId) => {
    try{
        const response = await cloudinary.uploader.destroy(publicId);
        return response;
    }catch(error){
        console.error('Error deleting file on Cloudinary:', error);
        return null;
    }
}


// Export
module.exports = { uploadOnCloudinary, deleteOnCloudinary };
