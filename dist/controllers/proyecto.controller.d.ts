import { Count, Filter, Where } from '@loopback/repository';
import { Proyecto } from '../models';
import { ProyectoRepository } from '../repositories';
export declare class ProyectoController {
    proyectoRepository: ProyectoRepository;
    constructor(proyectoRepository: ProyectoRepository);
    create(proyecto: Proyecto): Promise<Proyecto>;
    count(where?: Where<Proyecto>): Promise<Count>;
    find(filter?: Filter<Proyecto>): Promise<Proyecto[]>;
    updateAll(proyecto: Proyecto, where?: Where<Proyecto>): Promise<Count>;
    findById(id: number): Promise<Proyecto>;
    updateById(id: number, proyecto: Proyecto): Promise<void>;
    replaceById(id: number, proyecto: Proyecto): Promise<void>;
    deleteById(id: number): Promise<void>;
}
