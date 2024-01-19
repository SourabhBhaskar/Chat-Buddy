const userBioRouter = require("express").Router();
const { User } = require("../models/user.model");
const { usernameVerifier } = require("../utils/usernameVerifier.util");
const { emailVerifier } = require("../utils/emailVerifier.util");


// Routes
userBioRouter.patch('/update', async (req, res) => {
    const { username, mobile_number, email, location, status, description } = req.body;
    try {
        if(username){
            const usernameError = usernameVerifier(username);
            if(usernameError) return res.status(400).send(usernameError);
            else await User.updateOne({ email: req.user.email }, { $set: { username: username }});
        }else if(email){
            const emailError = emailVerifier(email) 
            if(emailError) return res.status(400).send(emailError);
            else await User.updateOne({ email: req.user.email }, { $set: { email: email }});
        }else if(mobile_number) await User.updateOne({ email: req.user.email }, { $set: { mobile_number: mobile_number }});
        else if(location) await User.updateOne({ email: req.user.email }, { $set: { location: location }});
        else if(status) await User.updateOne({ email: req.user.email }, { $set: { status: status }});
        else if(description) await User.updateOne({ email: req.user.email }, { $set: { description: description }});
        else return res.status(404).send("Not Found");
        return res.status(204).send();
    } catch (error) {
        return status(500).send("Internal Server Error");
    }
});


module.exports = { userBioRouter };