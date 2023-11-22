
// Is user authenticated
function isUserAuthenticated(req, res, next) {
  if(!req.isAuthenticated()){
    return res.status(400).json({ message: "User is not authenticated"});
  }
  next();
 }
 
 
 // Exports
 module.exports = { isUserAuthenticated };