import os from 'os';
import { Router } from 'express';
import passport from '../middlewares/auth';
import { clientID, clientSecret } from '../services/inputs';

const router = Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/info', (req, res) => {
  res.json({
    clientID,
    clientSecret,
    numberProcessors: os.cpus().length,
    procID: process.pid,
    workingDir: process.cwd(),
    memory: process.memoryUsage(),
    version: process.version,
    os: process.platform,
  });
});

export default router;
