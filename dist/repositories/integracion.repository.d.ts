import { DefaultCrudRepository } from '@loopback/repository';
import { Integracion, IntegracionRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class IntegracionRepository extends DefaultCrudRepository<Integracion, typeof Integracion.prototype.idInt, IntegracionRelations> {
    constructor(dataSource: DbDataSource);
}
