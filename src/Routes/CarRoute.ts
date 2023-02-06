import * as express from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = express.Router();

CarRouter.post('/', (req, res, next) => new CarController(req, res, next).addNewcar());
CarRouter.get('/', (req, res, next) => new CarController(req, res, next).findAll());
CarRouter.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
CarRouter.put('/:id', (req, res, next) => new CarController(req, res, next).updateById());
CarRouter.delete('/:id', (req, res, next) => new CarController(req, res, next).deleteById());

export default CarRouter;