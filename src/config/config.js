require("dotenv").config();

const secret = process.env.SECRET_JWT;

module.exports = secret;
