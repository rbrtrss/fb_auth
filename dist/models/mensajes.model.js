"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mensajeSchema = new _mongoose.default.Schema({
  author: {},
  text: String
}, {
  timestamps: true
});

class Mensajes {
  constructor() {
    this.mensajes = _mongoose.default.model('mensajes', mensajeSchema);
  }

  async add(nuevo) {
    const nuevoMensaje = new this.mensajes(nuevo);
    await nuevoMensaje.save();
  }

  async find() {
    return await this.mensajes.find().lean();
  }

}

var _default = new Mensajes();

exports.default = _default;