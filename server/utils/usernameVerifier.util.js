

// User name Verifier
const usernameVerifier = (username) => {
    if(typeof username !== 'string') 
        return { error: "Username should be string" };

    const isValidLength = username.length >= 1 && username.length <= 30;
    if(!isValidLength)
        return { error: "Username length should be between 3 to 15" };

    const isValidCharacters = /^[a-zA-Z0-9_ ]+$/.test(username);
    if(!isValidCharacters)
        return { error: "Username should contain only a-z, A-z, 0-9" };
    
    return null;
  }
  

// Export
module.exports = { usernameVerifier };
  