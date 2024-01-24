
// Is user authenticated
function isUserAuthenticated(req, res, next) {
  if(!req.isAuthenticated()){
    console.log("User is not authenticated")
    return res.status(400).send("User is not authenticated");
  }
  next();
 }
 
 
 // Exports
 module.exports = { isUserAuthenticated };