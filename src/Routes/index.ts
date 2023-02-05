import * as express from 'express';
import CarRouter from './CarRoute';
import MotorcycleRoute from './MotorcycleRoute';

const router = express.Router();

router.use('/cars', CarRouter);
router.use('/motorcycles', MotorcycleRoute);

export default router;