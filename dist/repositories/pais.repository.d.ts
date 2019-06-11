import { DefaultCrudRepository } from '@loopback/repository';
import { Pais, PaisRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class PaisRepository extends DefaultCrudRepository<Pais, typeof Pais.prototype.idPais, PaisRelations> {
    constructor(dataSource: DbDataSource);
}
