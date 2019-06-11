import { DefaultCrudRepository } from '@loopback/repository';
import { EstadoIntegracion, EstadoIntegracionRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class EstadoIntegracionRepository extends DefaultCrudRepository<EstadoIntegracion, typeof EstadoIntegracion.prototype.id, EstadoIntegracionRelations> {
    constructor(dataSource: DbDataSource);
}
