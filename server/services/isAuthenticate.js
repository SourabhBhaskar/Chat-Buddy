function checkAuthentication(req, res, next) {
    console.log(req.isAuthenticated());
     if (req.isAuthenticated()) {
       return res.status(200).json(req.user);
     }
     next();
 }
 
 
 module.exports = checkAuthentication ;