function checkAuthentication(req, res, next) {
     if (req.isAuthenticated()) {
       return res.status(200).json(req.user);
     }
     next();
 }
 
 
 module.exports = checkAuthentication ;