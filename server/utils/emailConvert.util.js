
const convertEmail = (email) => email.replace(/[.]/g, '_');
const convertBackEmail = (email) => email.replace(/[_]/g, '.');

module.exports ={ convertEmail, convertBackEmail };

  

  