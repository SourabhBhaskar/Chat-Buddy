
// .ENV 
const env = {
    // Port
    PORT: process.env.PORT,

    // MongoDB URI
    MONGODB_URI: process.env.MONGODB_URI,

    // Session Secret
    SESSION_SECRET: process.env.SESSION_SECRET,

    // Client URI
    CLIENT_URI: process.env.CLIENT_URI,

    // Cloudinary (corrected spelling)
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};


// Export
module.exports = { env };
