import { Count, Filter, Where } from '@loopback/repository';
import { EstadoIntegracion } from '../models';
import { EstadoIntegracionRepository } from '../repositories';
export declare class EstadoIntegracionController {
    estadoIntegracionRepository: EstadoIntegracionRepository;
    constructor(estadoIntegracionRepository: EstadoIntegracionRepository);
    create(estadoIntegracion: EstadoIntegracion): Promise<EstadoIntegracion>;
    count(where?: Where<EstadoIntegracion>): Promise<Count>;
    find(filter?: Filter<EstadoIntegracion>): Promise<EstadoIntegracion[]>;
    updateAll(estadoIntegracion: EstadoIntegracion, where?: Where<EstadoIntegracion>): Promise<Count>;
    findById(id: number): Promise<EstadoIntegracion>;
    updateById(id: number, estadoIntegracion: EstadoIntegracion): Promise<void>;
    replaceById(id: number, estadoIntegracion: EstadoIntegracion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
