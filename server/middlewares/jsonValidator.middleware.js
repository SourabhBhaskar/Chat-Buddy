

// JSON Validator
const jsonValidator = (req, res, next) => {
    const contentType = req.headers['content-type'];
    if (!contentType || contentType.indexOf('application/json') === -1) {
        return res.status(400).send('Invalid content type. Only JSON is accepted.');
    }
    next();
}


// Export 
module.exports = { jsonValidator };