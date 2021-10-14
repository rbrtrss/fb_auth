"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("../controller/productos.controller"));

var _mensajes = _interopRequireDefault(require("../models/mensajes.model"));

var _mensajes2 = _interopRequireDefault(require("../routes/mensajes.router"));

var _usuario = _interopRequireDefault(require("../routes/usuario.router"));

var _socket = require("socket.io");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const server = _http.default.createServer(app);

const io = new _socket.Server(server);
const StoreOptions = {
  store: _connectMongo.default.create({
    // mongoUrl: 'mongodb://127.0.0.1:27017/tarea23',
    mongoUrl: `${process.env.ATLAS_URI}`,
    ttl: 10 * 60
  }),
  secret: 'estabalapajrapintasentadaenelverdelimon',
  saveUninitialized: false,
  rolling: true,
  // cookie: { maxAge: 1000 * 60 },
  resave: false
};
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)());
app.use((0, _expressSession.default)(StoreOptions));
app.get('/', (req, res) => {
  res.sendFile(_path.default.resolve(__dirname, '../views/index.html'));
});
app.use('/mensajes', _mensajes2.default);
app.use('/usuarios', _usuario.default);
io.on('connection', socket => {
  console.log(`Usuario conectado en ${socket.id}`);
  socket.on('addedProducto', prd => {
    _productos.default.add(prd);

    console.log(prd);
  });
  socket.on('message', async msg => {
    _mensajes.default.add(msg); // console.log(JSON.stringify(await normalizador()));
    // io.emit('message', { sender: 'yo', msg });


    io.emit('message', await _mensajes.default.find());
  });
  socket.on('loggedUser', usr => {
    console.log(usr);
  });
});
var _default = server;
exports.default = _default;