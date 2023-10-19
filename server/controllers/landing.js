function landing(req, res){
    const isAuthenticated = req.isAuthenticated();
    if(isAuthenticated)
        res.status(200).json({ message: "Welcome-Back", data: req.user });
    else
        res.status(404).json({ message: "User is not found, Please sign up"});
}

module.exports = { landing };