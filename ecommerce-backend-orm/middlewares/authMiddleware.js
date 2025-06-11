const jwt = require('jsonwebtoken');
const { User } = require('../models'); // assuming User model exists
const secret = process.env.JWT_SECRET || 'your_jwt_secret_key';

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, secret);

      // Attach user to request (excluding password)
      req.user = await User.findByPk(decoded.id, {
        attributes: { exclude: ['password'] },
      });

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
