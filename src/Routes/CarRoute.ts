import * as express from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = express.Router();

CarRouter.post('/', (req, res, next) => new CarController(req, res, next).addNewcar());
CarRouter.get('/', (req, res, next) => new CarController(req, res, next).findAll());
CarRouter.get('/:id', (req, res, next) => new CarController(req, res, next).findById());

export default CarRouter;