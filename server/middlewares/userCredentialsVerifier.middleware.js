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
    const usernameError = usernameVerifier(username);
    if(usernameError.error)
        return res.status(400).json(usernameError);
    
    // Email Verification
    const emailError = emailVerifier(email);
    if(emailError.error) 
        return res.status(400).json(emailError);

    // Password Verification
    const passwordError = passwordVerifier(password);
    if(passwordError.error)
        return res.status(400).json(passwordError);

    // Email & Password Varified
    console.log("Username, Email & Password are verified");
    next();
}


// Export
module.exports = { userCredentialsVerifier };