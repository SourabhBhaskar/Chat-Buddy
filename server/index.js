// Importing built-in modules
const http = require("http");
const express = require("express");
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser'); 


// Configuration
require('dotenv').config();
require('./config/passport.config');


// Importing custom modules 
require("./db/db").startDB();
const { env } = require("./utils/env.util");
const { sessionSetup } = require("./middlewares/sessionSetup.middleware");
const { routeIsNotFound } = require("./middlewares/routeIsNotFound.middleware");
const { appMiddlewareError } = require("./middlewares/appMiddlewareError.middleware");
const { userAuthRouter } = require("./routes/userAuth.router");
const { userConnectionRouter } = require("./routes/userConnection.router");


// Declarations
const PORT = env.PORT;
const app = express();
const server = http.createServer(app);


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
app.use('/user/connections/', userConnectionRouter);
app.use(routeIsNotFound);


// Start the servers
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


