import server from './services/server';
import db from './services/db';
import { PORT } from './services/inputs';
import logger from './services/logger';

server.listen(PORT, () => {
  logger.info(`Server UP in port: ${PORT}`);
  logger.warn('Paso algo?');
  logger.error('Falsa Alarma solo pruebas');
  // console.log(`Server UP in port: ${PORT}`);
});
