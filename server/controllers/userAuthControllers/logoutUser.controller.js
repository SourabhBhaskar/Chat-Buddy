

// Logout route
const userLogout = (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).send(err.message);
      res.status(200).send("Logout successful");
    });
};


// Export
module.exports = { userLogout };