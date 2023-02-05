import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AutoODM from './AutoODM';

class CarsODM extends AutoODM <ICar> {
  constructor() {
    const schemaCar = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schemaCar, 'Car');
  }
}

export default CarsODM;