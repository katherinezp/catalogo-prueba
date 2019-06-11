import { DefaultCrudRepository } from '@loopback/repository';
import { Tecnologia, TecnologiaRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class TecnologiaRepository extends DefaultCrudRepository<Tecnologia, typeof Tecnologia.prototype.id, TecnologiaRelations> {
    constructor(dataSource: DbDataSource);
}
