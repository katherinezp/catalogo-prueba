import { Count, Filter, Where } from '@loopback/repository';
import { Integracion } from '../models';
import { IntegracionRepository } from '../repositories';
export declare class IntegracionController {
    integracionRepository: IntegracionRepository;
    constructor(integracionRepository: IntegracionRepository);
    create(integracion: Integracion): Promise<Integracion>;
    count(where?: Where<Integracion>): Promise<Count>;
    find(filter?: Filter<Integracion>): Promise<Integracion[]>;
    updateAll(integracion: Integracion, where?: Where<Integracion>): Promise<Count>;
    findById(id: number): Promise<Integracion>;
    updateById(id: number, integracion: Integracion): Promise<void>;
    replaceById(id: number, integracion: Integracion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
