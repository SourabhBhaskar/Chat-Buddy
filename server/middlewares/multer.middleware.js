// Imports
const multer = require("multer");


// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});


// Multer instance with the storage configuration
const upload = multer({ storage: storage });


// Exports
module.exports = { upload };
