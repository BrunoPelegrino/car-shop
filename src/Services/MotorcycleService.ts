import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  protected motorcycleODM: MotorCycleODM;

  constructor() {
    this.motorcycleODM = new MotorCycleODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async addNewMotorcycle(motorcycle: IMotorcycle) {
    const newMoto = await this.motorcycleODM.create(motorcycle);

    return this.createMotorcycleDomain(newMoto);
  }
}