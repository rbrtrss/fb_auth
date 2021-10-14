"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mensajes = _interopRequireDefault(require("../controller/mensajes.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _mensajes.default.muestraTodos);
router.post('/', _mensajes.default.addNuevoMensaje);
router.get('/normalizados', _mensajes.default.muestraNormalizado);
router.get('/logout', _mensajes.default.terminaSesion);
router.post('/login', _mensajes.default.arrancaSesion);
var _default = router;
exports.default = _default;