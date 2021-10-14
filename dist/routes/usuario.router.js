"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _inputs = require("../services/inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/auth/facebook', _auth.default.authenticate('facebook'));
router.get('/info', (req, res) => {
  res.json({
    clientID: _inputs.clientID,
    clientSecret: _inputs.clientSecret,
    procID: process.pid,
    workingDir: process.cwd(),
    memory: process.memoryUsage(),
    version: process.version,
    os: process.platform
  });
});
var _default = router;
exports.default = _default;