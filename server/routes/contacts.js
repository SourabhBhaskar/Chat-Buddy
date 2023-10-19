const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { addContact } = require('../controllers/contacts');

router.post('/add', addContact);

module.exports = router;
