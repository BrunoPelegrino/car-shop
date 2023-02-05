import * as express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcyclesRouter = express.Router();

MotorcyclesRouter.post('/', (req, res, next) => (
  new MotorcycleController(req, res, next).addNewMotorcycle()
));

export default MotorcyclesRouter;