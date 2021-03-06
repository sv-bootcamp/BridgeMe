import fs from 'fs';
import jwt from 'jsonwebtoken';

const JWT_CREATE_OPTION = { algorithm: 'HS256', expiresIn: '60min' };

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export default {
  apiProtector(req, res, next) {
    jwt.verify(req.headers.access_token, JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        res.status(401).json({ err_point: err.message });
      } else {
        req.user = decoded;
        return next();
      }
    });
  },

  generatePayload(user) {
    return { _id: user._id, name: user.name, email: user.email };
  },

  createAccessToken(user) {
    return jwt.sign(this.generatePayload(user), JWT_SECRET_KEY, JWT_CREATE_OPTION);
  },

  updateAccessToken(previousToken, updateTokenCallback) {
    jwt.verify(previousToken, JWT_SECRET_KEY, { ignoreExpiration: true }, function (err, decodedUser) {
      if (typeof updateTokenCallback === 'function') {
        updateTokenCallback(err, decodedUser ? this.createAccessToken(decodedUser) : undefined);
      }
    }.bind(this));
  },
};
