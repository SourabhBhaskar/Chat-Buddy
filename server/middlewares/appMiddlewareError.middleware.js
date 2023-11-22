

// App middleware error
const appMiddlewareError = (err, req, res, next)=>{
    if(err instanceof SyntaxError && 'body' in err)
      return res.status(400).json({ error: 'Bad Request: Invalid JSON syntax' });
    if(err)
      return res.status(400).json({ error: 'Bad Request' });
    next();
}


// Export
module.exports = { appMiddlewareError };