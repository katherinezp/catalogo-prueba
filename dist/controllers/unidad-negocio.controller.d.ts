import { Count, Filter, Where } from '@loopback/repository';
import { UnidadNegocio } from '../models';
import { UnidadNegocioRepository } from '../repositories';
export declare class UnidadNegocioController {
    unidadNegocioRepository: UnidadNegocioRepository;
    constructor(unidadNegocioRepository: UnidadNegocioRepository);
    create(unidadNegocio: UnidadNegocio): Promise<UnidadNegocio>;
    count(where?: Where<UnidadNegocio>): Promise<Count>;
    find(filter?: Filter<UnidadNegocio>): Promise<UnidadNegocio[]>;
    updateAll(unidadNegocio: UnidadNegocio, where?: Where<UnidadNegocio>): Promise<Count>;
    findById(id: number): Promise<UnidadNegocio>;
    updateById(id: number, unidadNegocio: UnidadNegocio): Promise<void>;
    replaceById(id: number, unidadNegocio: UnidadNegocio): Promise<void>;
    deleteById(id: number): Promise<void>;
}
