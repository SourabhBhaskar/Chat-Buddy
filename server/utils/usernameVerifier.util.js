

// User name Verifier
const usernameVerifier = (username) => {

    if (!username) 
        return "Username is required.";

    if(typeof username !== 'string') 
        return "Username should be string";

    const isValidLength = username.length >= 3 && username.length <= 30;
    if(!isValidLength)
        return "Username length should be between 3 to 30"

    const isValidCharacters = /^[a-zA-Z0-9_ ]+$/.test(username);
    if(!isValidCharacters)
        return "Username should contain only a-z, A-z, 0-9";
    
    return null
  }
  

// Export
module.exports = { usernameVerifier };
  