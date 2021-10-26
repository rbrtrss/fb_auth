import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import http from 'http';
import path from 'path';
import productos from '../controller/productos.controller';
import mensajes from '../models/mensajes.model';
import mensajesRouter from '../routes/mensajes.router';
import usuariosRouter from '../routes/usuario.router';
import { Server } from 'socket.io';
import compression from 'compression';
import logger from './logger';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const StoreOptions = {
  store: MongoStore.create({
    // mongoUrl: 'mongodb://127.0.0.1:27017/tarea23',
    mongoUrl: `${process.env.ATLAS_URI}`,
    ttl: 10 * 60,
  }),
  secret: 'estabalapajrapintasentadaenelverdelimon',
  saveUninitialized: false,
  rolling: true,
  // cookie: { maxAge: 1000 * 60 },
  resave: false,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(StoreOptions));
app.use(compression());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

app.use('/mensajes', mensajesRouter);

app.use('/usuarios', usuariosRouter);

io.on('connection', (socket) => {
  logger.info(`Usuario conectado en ${socket.id}`);
  // console.log(`Usuario conectado en ${socket.id}`);

  socket.on('addedProducto', (prd) => {
    productos.add(prd);
    logger.info(prd);
    // console.log(prd);
  });

  socket.on('message', async (msg) => {
    mensajes.add(msg);
    // console.log(JSON.stringify(await normalizador()));
    // io.emit('message', { sender: 'yo', msg });
    io.emit('message', await mensajes.find());
  });

  socket.on('loggedUser', (usr) => {
    logger.info(usr);
    // console.log(usr);
  });
});

export default server;
