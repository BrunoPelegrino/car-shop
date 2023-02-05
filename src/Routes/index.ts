import * as express from 'express';
import CarRouter from './CarRoute';

const router = express.Router();

router.use('/cars', CarRouter);

export default router;