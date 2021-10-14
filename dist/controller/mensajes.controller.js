"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mensajes = _interopRequireDefault(require("../models/mensajes.model"));

var _mensajes2 = _interopRequireDefault(require("../services/mensajes.normalizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userEmail = 'frodo@comarca.com.nz';
const userPassword = 'precioso';

class MensajesController {
  async addNuevoMensaje(req, res) {
    const nuevo = req.body;
    await _mensajes.default.add(nuevo);
    return res.json({
      agregado: nuevo
    });
  }

  async muestraTodos(req, res) {
    const mensajes = await _mensajes.default.find();
    return res.json({
      mensajes: mensajes
    });
  }

  async muestraNormalizado(req, res) {
    const normalizados = await (0, _mensajes2.default)();
    res.json({
      normalizados: normalizados
    });
  }

  arrancaSesion(req, res) {
    if (!req.body.email || !req.body.password) {
      console.log(req.session);
      return res.json({
        error: 'login fallido'
      });
    } else if (req.body.email === userEmail && req.body.password === userPassword) {
      req.session.email = req.body.email;
      req.session.loggedIn = true;
      console.log(req.session);
      return res.json({
        email: req.session.email,
        loggedIn: req.session.loggedIn
      });
    } else {
      console.log(req.session);
      return res.json({
        error: 'Usuario o password incorrecto'
      });
    }
  }

  terminaSesion(req, res) {
    console.log(req.session);
    req.session.destroy();
    console.log('deslogueado');
  }

}

var _default = new MensajesController();

exports.default = _default;