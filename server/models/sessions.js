// Built-in modules
require('dotenv').config();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


// Declarations
const SECRET_KEY = process.env.SECRET_KEY;
const MONGODB_URI = process.env.MONGODB_URI;


// Session store setup
const sessionStore = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
  expires: 1000 * 60 * 60 * 24 * 7, 
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
});


// Session on event
sessionStore.on('error', (error) => {
  console.error('MongoDB session store error:', error);
});



// Session setup
const sessionSetup = session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  store: sessionStore, 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
  },
})


// Export modules
module.exports = { sessionSetup };