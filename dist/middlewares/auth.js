"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportFacebook = require("passport-facebook");

var _usuario = _interopRequireDefault(require("../models/usuario.model"));

var _inputs = require("../services/inputs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const strategyOptions = {
  clientID: _inputs.clientID,
  clientSecret: _inputs.clientSecret,
  callbackURL: `http://localhost:${process.env.PORT}/auth/facebook/callback`
};

const login = async (req, email, password, done) => {
  const usuario = await _usuario.default.findOne(email);

  if (!usuario) {
    return done(null, false, {
      msg: 'No existe el usuario'
    });
  }

  if (!usuario.isValidPassword(password)) {
    return done(null, false, {
      msg: 'Password invalido'
    });
  }

  return done(null, usuario);
};

const signup = async (req, email, password, done) => {
  try {
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return done(null, false);
    }

    const usuario = await _usuario.default.findOne(email);

    if (usuario) {
      return done(null, false, {
        msg: 'Usuario ya Existente'
      });
    } else {
      const usuarioData = {
        email,
        password
      };
      const nuevoUsuario = await _usuario.default.add(usuarioData);
      return done(null, nuevoUsuario);
    }
  } catch (error) {
    done(error);
  }
};

_passport.default.use(new _passportFacebook.Strategy(strategyOptions, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({
    facebookId: profile.id
  }, function (err, user) {
    return cb(err, user);
  });
})); // passport.use('login', new Strategy(strategyOptions, login));
// passport.use('signup', new Strategy(strategyOptions, signup));


var _default = _passport.default;
exports.default = _default;