import { DefaultCrudRepository } from '@loopback/repository';
import { UnidadNegocio, UnidadNegocioRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class UnidadNegocioRepository extends DefaultCrudRepository<UnidadNegocio, typeof UnidadNegocio.prototype.id_un, UnidadNegocioRelations> {
    constructor(dataSource: DbDataSource);
}
