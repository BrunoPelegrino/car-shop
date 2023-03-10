import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';
import GenerateErrorMiddleware from '../Middlewares/GenerateErrorMiddleware';

class CarService {
  protected carODM: CarsODM;

  constructor() {
    this.carODM = new CarsODM();
  }

  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async addNewCar(car: ICar) {
    const CarODM = new CarsODM();
    const newCar = await CarODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const CarODM = new CarsODM();
    const findCars = await CarODM.findAll();
    const cars = findCars.map((all) => this.createCarDomain(all));

    return cars;
  }

  public async findById(id: string) {
    const CarODM = new CarsODM();
    const findCar = await CarODM.findById(id);

    if (!findCar) throw new GenerateErrorMiddleware(404, 'Car not found');
    return this.createCarDomain(findCar);
  }

  public async updateById(id: string, body: ICar) {
    const CarODM = new CarsODM();
    const updatedCar = await CarODM.update(id, body);

    if (!updatedCar) throw new GenerateErrorMiddleware(404, 'Car not found');
    return this.createCarDomain(updatedCar);
  }

  public async deleteById(id: string) {
    const CarODM = new CarsODM();
    const x = await this.carODM.findById(id);
    if (x) {
      await CarODM.delete(id);
    }
  }
}

export default CarService;