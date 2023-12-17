// Imports
import cloudinary from "cloudinary";


// Configuration
cloudinary.v2.config({ 
  cloud_name: process.env.REACT_APP_CLOUDNARY_NAME,  
  api_key: process.env.REACT_APP_CLOUDNARY_API_KEY, 
  api_secret: process.env.REACT_APP_CLOUDNARY_API_SECRET
});


// Upload on Cloudinary
export const uploadOnCloudinary = async (localFilePath, publicId) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.v2.uploader.upload(localFilePath, {
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
export const deleteOnCloudinary = async (publicId) => {
    try{
        const response = await cloudinary.v2.uploader.destroy(publicId);
        return response;
    }catch(error){
        console.error('Error deleting file on Cloudinary:', error);
        return null;
    }
}


