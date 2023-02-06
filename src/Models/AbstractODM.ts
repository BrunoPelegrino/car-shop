import { isValidObjectId, model, Model, models, Schema, Types, UpdateQuery } from 'mongoose';
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

  public async create(object: T): Promise<T> {
    return this.model.create(object);
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new GenerateErrorMiddleware(422, 'Invalid mongo id');
    }

    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new GenerateErrorMiddleware(422, 'Invalid mongo id');
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(id: string) {
    await this.model.deleteOne({ _id: id });
  }
}

export default AutoODM;