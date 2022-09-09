const jwt = require('jsonwebtoken');
const cookie = require("cookie")

const dotenv = require("dotenv");
dotenv.config()

// const jwtSecret = process.env.JWT_SECRET;
const jwtSecret = "Pyc9X6W7iPxou&caFYdDP";

const expiration = '200h';

console.log("creating a new token now")
module.exports = {
  authMiddleware: function(req) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    if (!token) {
      return false;
    }

    try {
      const data = jwt.verify(token, jwtSecret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  signToken: function({ user_name, email, _id }) {
    const payload = { 
      user_name, 
      email, 
      _id 
    };

    // console.log("inside signToken")
    // console.log("secret: ", jwtSecret)
    // console.log("expiration: ",expiration)

    return jwt.sign(payload, jwtSecret, { expiresIn: expiration });
  },

  decodeToken: (token) => {
    console.log("-----------------------")
    console.log("decoding token...")
    return jwt.verify(token, jwtSecret, function (err, decoded){
      console.log("decoded: ", decoded)
      if (err){
        err = {
          valid: "FALSE",
          name: "jwt token error",
          message: "invalid json web token"
        }
        return err
      } else {
        console.log("-----------------------")
        decoded.valid="TRUE"
        return decoded
      }
    })
  }
};