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
    const newCars = await CarODM.findAll();
    const cars = newCars.map((newCar) => this.createCarDomain(newCar));

    return cars;
  }

  public async findById(id: string) {
    const CarODM = new CarsODM();
    const newCar = await CarODM.findById(id);

    if (!newCar) throw new GenerateErrorMiddleware(404, 'Car not found');
    return this.createCarDomain(newCar);
  }

  public async updateById(id: string, body: ICar) {
    const CarODM = new CarsODM();
    const updatedCar = await CarODM.update(id, body);

    if (!updatedCar) throw new GenerateErrorMiddleware(404, 'Car not found');
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;