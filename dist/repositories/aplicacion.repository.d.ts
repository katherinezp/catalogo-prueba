import { DefaultCrudRepository } from '@loopback/repository';
import { Aplicacion, AplicacionRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class AplicacionRepository extends DefaultCrudRepository<Aplicacion, typeof Aplicacion.prototype.id, AplicacionRelations> {
    constructor(dataSource: DbDataSource);
}
