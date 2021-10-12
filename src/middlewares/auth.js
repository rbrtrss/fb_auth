import passport from 'passport';
import { Strategy } from 'passport-facebook';
import Usuarios from '../models/usuario.model';

const strategyOptions = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `http://localhost:${process.env.PORT}/auth/facebook/callback`,
};

const login = async (req, email, password, done) => {
  const usuario = await Usuarios.findOne(email);

  if (!usuario) {
    return done(null, false, { msg: 'No existe el usuario' });
  }

  if (!usuario.isValidPassword(password)) {
    return done(null, false, { msg: 'Password invalido' });
  }
  return done(null, usuario);
};

const signup = async (req, email, password, done) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return done(null, false);
    }
    const usuario = await Usuarios.findOne(email);
    if (usuario) {
      return done(null, false, { msg: 'Usuario ya Existente' });
    } else {
      const usuarioData = { email, password };
      const nuevoUsuario = await Usuarios.add(usuarioData);
      return done(null, nuevoUsuario);
    }
  } catch (error) {
    done(error);
  }
};

passport.use(
  new Strategy(strategyOptions, function (
    accessToken,
    refreshToken,
    profile,
    cb
  ) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  })
);

// passport.use('login', new Strategy(strategyOptions, login));
// passport.use('signup', new Strategy(strategyOptions, signup));

export default passport;
