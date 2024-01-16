// Imports
const validator = require("validator");


// Email Verifier
const emailVerifier = (email) => {

    if (!email) 
        return "Email is required.";

    if(typeof email !== 'string') 
        return "Email should be a string";

    // Check email syntax
    const isEmailSyntaxValid = validator.isEmail(email);
    if(!isEmailSyntaxValid) 
        return "Email is not valid";

    return null;
}


// Export
module.exports = { emailVerifier };