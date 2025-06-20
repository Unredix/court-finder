const jwt = require('jsonwebtoken');
const config = require('../config/database');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, config.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const generateToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
    authenticateToken,
    generateToken
};