import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { allCars, carInput, existingCar } from '../Mocks/carMock';

describe('Testa o CarService', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Adiciona um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(existingCar);
  
    const carService = new CarService();
    const result = await carService.addNewCar(carInput);
  
    expect(result).to.be.deep.equal(existingCar);
  }); 
  
  it('Lista todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allCars);

    const carService = new CarService();
    const result = await carService.findAll();
    expect(result).to.be.deep.equal(allCars);
  });
  
  it('Lista um carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allCars[0]);
  
    const carService = new CarService();
    const result = await carService.findById('634852326b35b59438fbea2f');
  
    expect(result).to.be.deep.equal(allCars[0]);
  });

  it('Testa erro caso id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    const carService = new CarService();

    try {
      await carService.findById('634852326b35b59438fbea2f');
    } catch (e) {
      expect((e as Error).message).to.be.equal('Car not found');
    }
  });
});
