const router = require('express').Router();


router.get('/', (req, res)=>{
    const isAuthenticated = req.isAuthenticated();
    if(isAuthenticated)
        res.json(req.user);
    else
        res.json(false);
})


module.exports = router;