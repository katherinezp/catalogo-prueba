import {DefaultCrudRepository} from '@loopback/repository';
import {Tecnologia, TecnologiaRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TecnologiaRepository extends DefaultCrudRepository<
  Tecnologia,
  typeof Tecnologia.prototype.id,
  TecnologiaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Tecnologia, dataSource);
  }
}
