const { convertEmail } = require("../../utils/emailConvert.util");
const { User } = require("../../models/user.model");


async function favoriteConnectionController (req, res){
    const { connectionEmail, isFavorite } = req.body;
    const connection = req.user.connections.all[convertEmail(connectionEmail)];
    if(!connection)
        return res.status(404).send("Connection not found");

    try {
        const response = await User.updateOne(
            { email: req.user.email },
            {
              $set: {
                [`connections.all.${convertEmail(connectionEmail)}.isFavorite`]: isFavorite
              }
            }
        );
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send("Internal server error");
    }
}


module.exports = { favoriteConnectionController };