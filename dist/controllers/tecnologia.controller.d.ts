import { Count, Filter, Where } from '@loopback/repository';
import { Tecnologia } from '../models';
import { TecnologiaRepository } from '../repositories';
export declare class TecnologiaController {
    tecnologiaRepository: TecnologiaRepository;
    constructor(tecnologiaRepository: TecnologiaRepository);
    create(tecnologia: Tecnologia): Promise<Tecnologia>;
    count(where?: Where<Tecnologia>): Promise<Count>;
    find(filter?: Filter<Tecnologia>): Promise<Tecnologia[]>;
    updateAll(tecnologia: Tecnologia, where?: Where<Tecnologia>): Promise<Count>;
    findById(id: number): Promise<Tecnologia>;
    updateById(id: number, tecnologia: Tecnologia): Promise<void>;
    replaceById(id: number, tecnologia: Tecnologia): Promise<void>;
    deleteById(id: number): Promise<void>;
}
