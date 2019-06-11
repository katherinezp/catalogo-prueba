import {DefaultCrudRepository} from '@loopback/repository';
import {Integracion, IntegracionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IntegracionRepository extends DefaultCrudRepository<
  Integracion,
  typeof Integracion.prototype.idInt,
  IntegracionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Integracion, dataSource);
  }
}
