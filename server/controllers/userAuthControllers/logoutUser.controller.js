

// Logout route
const userLogout = (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log("Logout successful");
      res.status(200).json({ message: "Logout successful" });
    });
};


// Export
module.exports = { userLogout };