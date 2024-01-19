
// If route is not found
const routeIsNotFound = (req, res) => {
    console.log("Route is not found");
    return res.status(404).send('Route not found');
}


// Export
module.exports = { routeIsNotFound };