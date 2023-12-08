// Imports
const userUpdateRouter = require("express").Router();
const { updateUsername } = require("../controllers/userUpdateControllers/updateUsername.controller");
const { updateMobileNumber } = require("../controllers/userUpdateControllers/updateMobileNumber.controller");
const { updateLocation } = require("../controllers/userUpdateControllers/updateLoaction.controller");
const { updateStatus } = require("../controllers/userUpdateControllers/updateStatus.controller");
const { updatePicture } = require("../controllers/userUpdateControllers/updatePicture.controller");
const { upload } = require("../middlewares/multer.middleware");


// Routes
userUpdateRouter.put('/username', updateUsername);
userUpdateRouter.put('/mobile_number', updateMobileNumber);
userUpdateRouter.put('/picture', upload.single('picture'), updatePicture);
userUpdateRouter.put('/status', updateStatus);
userUpdateRouter.put('/location', updateLocation);


// Export
module.exports = { userUpdateRouter };