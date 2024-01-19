const { User } = require("../../models/user.model");

async function notificationConnection(req, res){
    const { connectionEmail, isNotificationOn } = req.body;

    try {
        const response = await User.updateOne(
            { email: req.user.email },
            {
              $set: {
                'connections.$[element].settings.isNotificationOn': isNotificationOn
              }
            },
            {
              arrayFilters: [{ 'element.bio.email': connectionEmail }]
            }
          );
        
        if(response.modifiedCount === 0)
            return res.status(404).send("Connection not found in connection list");

        return res.status(204).send();
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
}


module.exports = { notificationConnection }