const router = require('express').Router()
const { signup, login, logout } = require('../controllers/auth');


// Signup route
router.post('/signup', signup);


// Login route
router.post('/login', login);


// Logout route
router.get('/logout', logout);



// Exports all the routes
module.exports = router;


