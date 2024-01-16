// Imports
const userConnectionRouter = require("express").Router();
const { isUserAuthenticated } = require("../middlewares/isUserAuthenticated.middleware")
const { jsonValidator } = require("../middlewares/jsonValidator.middleware");
const { addUserConnection } = require("../controllers/userConnectionControllers/addUserConnection.controller");
const { removeUserConnection } = require("../controllers/userConnectionControllers/removeUserConnection.controller");


// Routes
userConnectionRouter.put('/add', [isUserAuthenticated, jsonValidator], addUserConnection);
userConnectionRouter.delete('/remove', [isUserAuthenticated, jsonValidator], removeUserConnection);


// Exports
module.exports = { userConnectionRouter };