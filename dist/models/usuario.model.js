"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usuarioSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
usuarioSchema.pre('save', async function (next) {
  const usuario = this;
  const hash = await _bcrypt.default.hash(usuario.password, 10);
  this.password = hash;
  next();
});

usuarioSchema.methods.isValidPassword = async function (password) {
  const usuario = this;
  const compara = await _bcrypt.default.compare(password, usuario.password);
  return compara;
};

class Usuarios {
  constructor() {
    this.usuarios = _mongoose.default.model('usuarios', usuarioSchema);
  }

  async add(nuevo) {
    const nuevoUsuario = new this.usuarios(nuevo);
    await nuevoUsuario.save();
  }

  async find() {
    return await this.usuarios.find().lean();
  }

  async findOne(email) {
    return await this.usuarios.findOne({
      email
    }).lean();
  }

}

var _default = new Usuarios();

exports.default = _default;