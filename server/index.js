// Importing built-in  modules
require('dotenv').config();
const http = require("http");
const express = require("express");
const cors = require('cors');
const passport = require('passport');
const cookParser = require('cookie-parser');

// Importing custom  modules
require("./services/db").startServer();
const { sessionSetup } = require("./services/sessions");
const { configureSocketIO } = require("./services/socketIO");
const landingRouter = require("./routes/landing");
const authRouter = require("./routes/auth");
const contactsRouter = require('./routes/contacts');
const editRouter = require('./routes/edit');




// Declarations
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const socket = configureSocketIO(server);


// Cors options
const corsOptions = {
  origin: process.env.CLIENT_URI,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}


// Middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }))
app.use(cookParser());


// Session setup
app.use(sessionSetup);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/', landingRouter);
app.use('/auth', authRouter);
app.use('/contacts', contactsRouter);
app.use('/edit', editRouter);


// Start the servers
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





