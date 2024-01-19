// Imports
const userConnectionRouter = require("express").Router();
const { isUserAuthenticated } = require("../middlewares/isUserAuthenticated.middleware")
const { jsonValidator } = require("../middlewares/jsonValidator.middleware");
const { addUserConnection } = require("../controllers/userConnectionControllers/addUserConnection.controller");
const { removeUserConnection } = require("../controllers/userConnectionControllers/removeUserConnection.controller");
const { favoriteConnection } = require("../controllers/userConnectionControllers/favoriteUserConnection.controller");
const { blockConnection } = require("../controllers/userConnectionControllers/blockUserConnection.controller");
const { notificationConnection } = require("../controllers/userConnectionControllers/notifictionConnection.controller");


// Routes
userConnectionRouter.put('/add', [isUserAuthenticated, jsonValidator], addUserConnection);
userConnectionRouter.delete('/remove', [isUserAuthenticated, jsonValidator], removeUserConnection);
userConnectionRouter.patch('/block', blockConnection);
userConnectionRouter.patch('/favorite', favoriteConnection);
userConnectionRouter.patch('/notification', notificationConnection);
// userConnectionRouter.patch('/connection/update/')


// Exports
module.exports = { userConnectionRouter };