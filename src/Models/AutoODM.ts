import { model, Model, models, Schema, Types } from 'mongoose';
import GenerateErrorMiddleware from '../Middlewares/GenerateErrorMiddleware';

class AutoODM<T> {
  private model: Model<T>;
  private schema: Schema;
  private vehicle: string;

  constructor(schema: Schema, vehicle: string) {
    this.schema = schema;
    this.vehicle = vehicle;

    this.model = models[this.vehicle] || model(this.vehicle, this.schema);
  }

  async create(object: T): Promise<T> {
    return this.model.create(object);
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new GenerateErrorMiddleware(422, 'Invalid mongo id');
    }

    return this.model.findById(id);
  }
}

export default AutoODM;