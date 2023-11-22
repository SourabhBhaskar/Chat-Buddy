// Imports
const userConnectionRouter = require("express").Router();
const { isUserAuthenticated } = require("../middlewares/isUserAuthenticated.middleware")
const { jsonValidator } = require("../middlewares/jsonValidator.middleware");
const { emailValidator } = require("../middlewares/emailValidator.middleware");
const { addUserConnection } = require("../controllers/userConnectionControllers/addUserConnection.controller");
const { removeUserConnection } = require("../controllers/userConnectionControllers/removeUserConnection.controller");


// Routes
userConnectionRouter.post('/add', [isUserAuthenticated, jsonValidator, emailValidator], addUserConnection);
userConnectionRouter.delete('/remove', [isUserAuthenticated, jsonValidator, emailValidator], removeUserConnection);


// Exports
module.exports = { userConnectionRouter };