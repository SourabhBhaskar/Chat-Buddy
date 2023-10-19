const router = require('express').Router();
const { landing } = require('../controllers/landing');
const isAuthenticated = require('../services/isAuthenticate');


router.get('/', isAuthenticated, landing);


module.exports = router;