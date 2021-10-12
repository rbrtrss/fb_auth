import { Router } from 'express';
import passport from '../middlewares/auth';

const router = Router();

router.get('/auth/facebook', passport.authenticate('facebook'));

export default router;
