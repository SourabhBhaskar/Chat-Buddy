// Built-in modules
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const { env } = require("../utils/env.util");


// Declarations
const SECRET_KEY = env.SESSION_SECRET;
const MONGODB_URI = env.MONGODB_URI;


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


// Session setup
const sessionSetup = session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, 
    },
});


// Export modules
module.exports = { sessionSetup };
