import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor( 
    car: ICar,
  ) {
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.id = car.id;
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
