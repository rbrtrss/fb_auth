import server from './services/server';
import db from './services/db';
import { PORT } from './services/inputs';

server.listen(PORT, () => {
  console.log(`Server UP in port: ${PORT}`);
});
