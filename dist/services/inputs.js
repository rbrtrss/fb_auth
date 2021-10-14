"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientSecret = exports.clientID = void 0;
const argumentos = process.argv.slice(2);
const clientID = argumentos[0] || process.env.FACEBOOK_CLIENT_ID;
exports.clientID = clientID;
const clientSecret = argumentos[1] || process.env.FACEBOOK_CLIENT_SECRET;
exports.clientSecret = clientSecret;