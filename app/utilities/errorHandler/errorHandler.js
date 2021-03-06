module.exports = errorHandler;

function errorHandler(err, req, res, next) {
   console.log(err);
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        //console.log(err);
        return res.status(401).json({ message: err.message });
    }

    // default to 500 server error
    res.statusMessage = err.message;
    return res.status(500).json({ message: err.message });
}