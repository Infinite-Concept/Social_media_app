const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' });
};

// Middleware to check if user is authenticated (logged in)
const isAuthenticated = (req, res, next) => {
    // Extract token from request headers or query parameters
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (!token) {
        // Token not found, user is not authenticated
        return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
        if (err) {
            // Token is invalid or expired, user is not authenticated
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        // User is authenticated, proceed to next middleware
        req.userId = decodedToken.userId;
        next();
    });
};

// Middleware to check if user is not authenticated (not logged in)
const isNotAuthenticated = (req, res, next) => {
    // Extract token from request headers or query parameters
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (token) {
        // Token found, user is authenticated
        return res.status(403).json({ error: 'Forbidden: User is already authenticated' });
    }

    // User is not authenticated, proceed to next middleware
    next();
};

module.exports = {
    generateToken,
    isAuthenticated,
    isNotAuthenticated
};
