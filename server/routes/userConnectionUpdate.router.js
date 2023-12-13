const userConnectionUpdateRouter = require("express").Router();
const { convertBackEmail, convertEmail } = require("../utils/emailConvert.util");
const { User } = require("../models/user.model");


userConnectionUpdateRouter.put('/notifications', async(req, res) => {
    const { connectionId, data } = req.body;

    try {

        const updatingNotification = await User.find({ "connections.all": convertEmail(connectionId) })
        console.log(updatingNotification, convertEmail(connectionId))
        // const updatingNotification = await User.updateOne(
        //     { email: req.user.email, "connections.all": convertBackEmail(connectionId) },
        //     { 'connections.all.notifications': data.value } 
        //   );
        //   console.log(updatingNotification)
        // if(updatingNotification && updatingNotification.modifiedCount === 0)
        //     return res.status(500).json({ error: 'Internel Server Error' });
        // else 
        //     return res.status(200).json({ message: `${data.name} Updated Successfully`, data: { name: data.name, value: data.value }});
    } catch (error) {
        return res.status(500).json({ error: 'Internel Server Error' });
    }

});


userConnectionUpdateRouter.put('/block', (req, res) => {
    console.log("block")
    res.json("Hellow from server block")
})

module.exports = { userConnectionUpdateRouter }