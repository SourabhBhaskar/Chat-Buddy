
// If route is not found
const routeIsNotFound = (req, res) => {
    console.log("Route is not found");
    return res.status(404).json({ error: 'Route not found' });
}


// Export
module.exports = { routeIsNotFound };