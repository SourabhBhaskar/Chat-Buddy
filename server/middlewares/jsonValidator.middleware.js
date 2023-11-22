

// JSON Validator
const jsonValidator = (req, res, next) => {
    const contentType = req.headers['content-type'];
    if (!contentType || contentType.indexOf('application/json') === -1) {
        console.log("Invalid Json");
        return res.status(400).send({ error: 'Invalid content type. Only JSON is accepted.' });
    }
    console.log("Valid Json");
    next();
}


// Export 
module.exports = { jsonValidator };