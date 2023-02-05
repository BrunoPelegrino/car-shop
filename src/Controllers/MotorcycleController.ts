import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async addNewMotorcycle() {
    try {
      const newMoto = await this.service.addNewMotorcycle(this.req.body);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const allMoto = await this.service.findAll();
      return this.res.status(200).json(allMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const moto = await this.service.findById(id);
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const updatedMotorcycle = await this.service.updateById(id, body);
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}