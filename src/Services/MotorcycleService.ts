import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';
import GenerateErrorMiddleware from '../Middlewares/GenerateErrorMiddleware';

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

  public async findAll() {
    const motorcylceODM = new MotorCycleODM();
    const findMotorcycles = await motorcylceODM.findAll();
    const cars = findMotorcycles.map((all) => this.createMotorcycleDomain(all));

    return cars;
  }

  public async findById(id: string) {
    const motorcylceODM = new MotorCycleODM();
    const motorcycle = await motorcylceODM.findById(id);

    if (!motorcycle) throw new GenerateErrorMiddleware(404, 'Motorcycle not found');
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateById(id: string, body: IMotorcycle) {
    const motorcylceODM = new MotorCycleODM();
    const updatedMotorcycle = await motorcylceODM.update(id, body);

    if (!updatedMotorcycle) throw new GenerateErrorMiddleware(404, 'Motorcycle not found');
    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}