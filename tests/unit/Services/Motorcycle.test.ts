import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import { existingMotorcycle, motorcycleInput,
  allMotorcycle, updatedMoto } from '../Mocks/motorcycleMocks';

import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa o MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Adiciona uma nova mota', async function () {
    sinon.stub(Model, 'create').resolves(existingMotorcycle);
    
    const motoService = new MotorcycleService();
    const result = await motoService.addNewMotorcycle(motorcycleInput);
    
    expect(result).to.be.deep.equal(existingMotorcycle);
  }); 
    
  it('Lista todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycle);
  
    const motoService = new MotorcycleService();
    const result = await motoService.findAll();
    expect(result).to.be.deep.equal(allMotorcycle);
  });
    
  it('Lista um carro pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(allMotorcycle[0]);
    
    const motoService = new MotorcycleService();
    const result = await motoService.findById('634852326b35b59438fbea2f');
    
    expect(result).to.be.deep.equal(allMotorcycle[0]);
  });

  it('Testa erro caso id inválido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    const motoService = new MotorcycleService();

    try {
      await motoService.findById('634852326b35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Testa se é possível realizar update de uma moto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMoto);

    const motoService = new MotorcycleService();
    const result = await motoService.updateById('6348513f34c397abcad040b2', allMotorcycle[0]);

    expect(result).to.be.deep.equal(updatedMoto);
  });

  it('Testa erro no update', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMoto);
    const motoService = new MotorcycleService();

    try {
      await motoService.updateById('634852326b35b59438fbea2f', motorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
});