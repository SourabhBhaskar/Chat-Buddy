// Importing built-in modules
const http = require("http");
const express = require("express");
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');


// Built-in configuration
require('dotenv').config();
require('./config/passport.config');


// Built-in declarations
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);


// Importing custom modules
const { sessionSetup } = require("./middlewares/sessionSetup.middleware");
const { routeIsNotFound } = require("./middlewares/routeIsNotFound.middleware");
const { appMiddlewareError } = require("./middlewares/appMiddlewareError.middleware");
const { userAuthRouter } = require("./routes/userAuth.router");
const { userUpdateRouter } = require("./routes/userUpdate.router");
const { userConnectionRouter } = require("./routes/userConnection.router");
const { userConnectionUpdateRouter } = require("./routes/userConnectionUpdate.router");



// Custom configuration
require('./db/db').startDB();
require('./socket/socket-server').startSocketServer(server);


// Cors options
const corsOptions = {
  origin: process.env.CLIENT_URI,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}


// Middlewares for app
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cookieParser()); 
app.use(sessionSetup);
app.use(passport.initialize());
app.use(passport.session());
app.use(appMiddlewareError);


// Routes
app.use('/user/auth', userAuthRouter);
app.use('/user/update', userUpdateRouter);
app.use('/user/connections/', userConnectionRouter);
app.use('/user/connections/update', userConnectionUpdateRouter);
app.use(routeIsNotFound);


// Start the servers
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


