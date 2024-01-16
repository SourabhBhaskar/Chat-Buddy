// Imports
const userAuthRouter = require('express').Router();
const { jsonValidator } = require("../middlewares/jsonValidator.middleware");
const { userCredentialsVerifier } = require("../middlewares/userCredentialsVerifier.middleware");
const { userAuthentication } = require("../controllers/userAuthControllers/authenticationUser");
const { userSignup } = require("../controllers/userAuthControllers/signupUser.controller");
const { userLogin } = require("../controllers/userAuthControllers/loginUser.controller");
const { userLogout } = require("../controllers/userAuthControllers/logoutUser.controller");


// Routes
userAuthRouter.get('/', userAuthentication);
userAuthRouter.post('/signup', [jsonValidator, userCredentialsVerifier], userSignup);
userAuthRouter.post('/login', [jsonValidator], userLogin);
userAuthRouter.get('/logout', userLogout);


// Exports all the routes
module.exports = { userAuthRouter };