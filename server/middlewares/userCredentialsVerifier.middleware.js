const { usernameVerifier } = require("../utils/usernameVerifier.util");
const { emailVerifier } = require("../utils/emailVerifier.util");
const { passwordVerifier } = require("../utils/passwordVerifier.util");



// User Credentials Verification
const userCredentialsVerifier = (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(username, email, password)

    // Email & Password Validation
    if(!username && !email && !password) return res.status(400).json({ error: "Username, Email & Password are not provided"});
    if(!username) return res.status(400).json({ error: "Username is not provided" });
    if(!email) return res.status(400).json({ error: "Email is not provided" });
    if(!password) return res.status(400).json({ error: "Password is not provided" });

    // Password Verification
    const isUsernameValid = usernameVerifier(username);
    if(isUsernameValid !== null)
        return res.status(400).json({ ...isUsernameValid });
    
    // Email Verification
    const isEmailValid = emailVerifier(email);
    if(isEmailValid !== null) 
        return res.status(400).json({ ...isEmailValid });

    // Password Verification
    const isPasswordValid = passwordVerifier(password);
    if(isPasswordValid !== null)
        return res.status(400).json({ ...isPasswordValid });

    // Email & Password Varified
    console.log("Username, Email & Password are verified");
    next();
}


// Export
module.exports = { userCredentialsVerifier };