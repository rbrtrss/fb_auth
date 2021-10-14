"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _normalizr = require("normalizr");

var _mensajes = _interopRequireDefault(require("../models/mensajes.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nMensajes = async () => {
  const sinprocesar = await _mensajes.default.find();
  const usuario = new _normalizr.schema.Entity('author', {}, {
    idAttribute: 'email'
  });
  const mensaje = new _normalizr.schema.Entity('mensaje', {
    author: usuario
  }, {
    idAttribute: '_id'
  });
  return (0, _normalizr.normalize)(sinprocesar, [mensaje]);
};

var _default = nMensajes;
exports.default = _default;