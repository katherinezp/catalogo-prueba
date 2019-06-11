import { Count, Filter, Where } from '@loopback/repository';
import { Aplicacion } from '../models';
import { AplicacionRepository } from '../repositories';
export declare class AplicacionController {
    aplicacionRepository: AplicacionRepository;
    constructor(aplicacionRepository: AplicacionRepository);
    create(aplicacion: Aplicacion): Promise<Aplicacion>;
    count(where?: Where<Aplicacion>): Promise<Count>;
    find(filter?: Filter<Aplicacion>): Promise<Aplicacion[]>;
    updateAll(aplicacion: Aplicacion, where?: Where<Aplicacion>): Promise<Count>;
    findById(id: number): Promise<Aplicacion>;
    updateById(id: number, aplicacion: Aplicacion): Promise<void>;
    replaceById(id: number, aplicacion: Aplicacion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
