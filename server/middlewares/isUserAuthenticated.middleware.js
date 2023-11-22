
// Is user authenticated
function isUserAuthenticated(req, res, next) {
  if(!req.isAuthenticated()){
    console.log("User is not authenticated")
    return res.status(400).json({ error: "User is not authenticated"});
  }
  console.log("User is authenticated")
  next();
 }
 
 
 // Exports
 module.exports = { isUserAuthenticated };