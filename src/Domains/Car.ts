import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  protected id: string | undefined;
  private doorsQty: number;
  private seatsQty: number;

  constructor( 
    car: ICar,
  ) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
  getId() {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }
  
  getModel() {
    return this.model;
  }

  setModel(model: string) {
    this.model = model;
  }
    
  getyear() {
    return this.year;
  }
  setyear(year: number) {
    this.year = year;
  }

  getcolor() {
    return this.color;
  }

  setcolor(color: string) {
    this.color = color;
  }

  getstatus() {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  getDoorsQty() {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}
