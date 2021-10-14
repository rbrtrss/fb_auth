"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productos = _interopRequireDefault(require("../models/productos.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductosController {
  add(nuevo) {
    const nuevoProducto = new _productos.default(nuevo);
    nuevoProducto.save();
  }

}

var _default = new ProductosController();

exports.default = _default;