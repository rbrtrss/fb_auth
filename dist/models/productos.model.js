"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productoSchema = new _mongoose.default.Schema({
  title: String,
  price: Number,
  thumbnail: String
}, {
  timestamps: true
});

const Productos = _mongoose.default.model('productos', productoSchema);

var _default = Productos;
exports.default = _default;