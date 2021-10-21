"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientSecret = exports.clientID = exports.PORT = void 0;
const argumentos = process.argv.slice(2);
const PORT = argumentos[0] || process.env.PORT;
exports.PORT = PORT;
const clientID = argumentos[1] || process.env.FACEBOOK_CLIENT_ID;
exports.clientID = clientID;
const clientSecret = argumentos[2] || process.env.FACEBOOK_CLIENT_SECRET;
exports.clientSecret = clientSecret;