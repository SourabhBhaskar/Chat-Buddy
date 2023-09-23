const express = require('express');
const { User } = require('../models/user');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const email = req.body.email.toLowerCase();
        const dataField = req.body.dataField.toLowerCase();
        const data = req.body.data;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user[dataField] = data;
        await user.save();

        console.log(`Updated ${dataField} for user with email: ${email}`);
        console.log(dataField)
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;