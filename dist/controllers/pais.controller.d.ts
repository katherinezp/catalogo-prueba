import { Count, Filter, Where } from '@loopback/repository';
import { Pais } from '../models';
import { PaisRepository } from '../repositories';
export declare class PaisController {
    paisRepository: PaisRepository;
    constructor(paisRepository: PaisRepository);
    create(pais: Pais): Promise<Pais>;
    count(where?: Where<Pais>): Promise<Count>;
    find(filter?: Filter<Pais>): Promise<Pais[]>;
    updateAll(pais: Pais, where?: Where<Pais>): Promise<Count>;
    findById(id: number): Promise<Pais>;
    updateById(id: number, pais: Pais): Promise<void>;
    replaceById(id: number, pais: Pais): Promise<void>;
    deleteById(id: number): Promise<void>;
}
