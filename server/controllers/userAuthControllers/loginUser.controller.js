const passport = require("passport");
const { userData } = require("../../utils/userData.util");


// Login route
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // Email & Password Validation
  if(!email) return res.status(400).send("Email is not provided" );
  if(!password) return res.status(400).send("Password is not provided");

  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).send("Internal Server Error");
    if (!user) return res.status(400).send(info.error);

    req.login(user, async (err) => {
      if (err)
        return res.status(500).send("Internal Server Error");

      const updatedUser = await userData(req.user);
      return res.status(200).json(updatedUser);
    });
  })(req, res, next);
};


module.exports = { userLogin };
