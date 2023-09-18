// Importing built-in  modules
require('dotenv').config();
const http = require("http");
const express = require("express");
const cors = require('cors');
const passport = require('passport');


// Importing custom  modules
const { mongoose } = require("./services/db");
const { User } = require("./models/auth");
const { sessionSetup } = require("./models/sessions");
const { configureSocketIO } = require("./services/socketIO");
const authRouter = require("./routes/auth");
const addUserRouter = require('./routes/addUser');




// Declarations
const PORT = process.env.PORT || 4001
const app = express();
const server = http.createServer(app);
const socket = configureSocketIO(server);


// Cors options
const corsOptions = {
  origin: process.env.CLIENT_URI,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}


// Middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended:true }));
app.use(express.json({ extended:true }))


// Session setup
app.use(sessionSetup);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/auth', authRouter);
app.use('/profile', addUserRouter);
app.get('/', (req, res)=>{
  res.send("<h1>HI, I am from Server</h1>");
})


// Start the servers
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





