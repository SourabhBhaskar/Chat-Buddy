const userConnectionUpdateRouter = require("express").Router();
const { favoriteConnectionController } = require("../controllers/userConnectionControllers/favoriteUserConnection.controller");
const { blockConnectionController } = require("../controllers/userConnectionControllers/blockUserConnection.controller");


userConnectionUpdateRouter.patch('/favorite', favoriteConnectionController);
userConnectionUpdateRouter.patch('/block', blockConnectionController);


module.exports = { userConnectionUpdateRouter }