"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(`${process.env.ATLAS_URI}`); // const db = mongoose.connect('mongodb://127.0.0.1:27017/tarea23');

const db = _mongoose.default.connect(`${process.env.ATLAS_URI}`);

var _default = db;
exports.default = _default;