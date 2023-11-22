const User = require('../../models/userModels/user.model');


const updateUser = async (req, res) => {
    try {
      const { name, value } = req.body || {};
      const { email } = req.user || {};
      console.log(name, value, email)

      if (!email) {
        return res.status(400).json({ error: `${name} is required for updating ${value}` });
      }

      const updateField = {};
      updateField[name.toLowerCase().replace(/ /g, '_')] = value;
      const result = await User.updateOne(
        { email },
        { $set: updateField } 
      );
  
      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: `${email} is not found or ${name} is already set to ${value}` });
      }
  
      res.json({ message: `${name} updated successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  



// Exports
module.exports = { 
    updateUser,
 }