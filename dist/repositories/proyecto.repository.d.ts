import { DefaultCrudRepository } from '@loopback/repository';
import { Proyecto, ProyectoRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class ProyectoRepository extends DefaultCrudRepository<Proyecto, typeof Proyecto.prototype.id, ProyectoRelations> {
    constructor(dataSource: DbDataSource);
}
