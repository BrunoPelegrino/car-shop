import * as express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcyclesRouter = express.Router();

MotorcyclesRouter.post('/', (req, res, next) => (
  new MotorcycleController(req, res, next).addNewMotorcycle()
));

MotorcyclesRouter.get('/', (req, res, next) => (
  new MotorcycleController(req, res, next).findAll()
));

MotorcyclesRouter.get('/:id', (req, res, next) => (
  new MotorcycleController(req, res, next).findById()
));

MotorcyclesRouter.put('/:id', (req, res, next) => (
  new MotorcycleController(req, res, next).updateById()
));

export default MotorcyclesRouter;