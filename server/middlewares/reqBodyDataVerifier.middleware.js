
// User Credentials Verification
const reqBodyDataVerifier = (req, res, next) => {
    const { email, password } = req.body;

    // Email & Password Validation
    if(!email && !password) return res.status(400).json({ error: "Email & Password are not provided"});
    if(!email) return res.status(400).json({ error: "Email is not provided" });
    if(!password) return res.status(400).json({ error: "Password is not provided" });

    // Data Varified
    console.log("Data is verified");
    next();
}


// Export
module.exports = { reqBodyDataVerifier };