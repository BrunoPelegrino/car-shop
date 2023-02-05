import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AutoODM from './AbstractODM';

export default class MotorCycleODM extends AutoODM<IMotorcycle> {
  constructor() {
    const motorcycleSchema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(motorcycleSchema, 'Motorcycle');
  }
}