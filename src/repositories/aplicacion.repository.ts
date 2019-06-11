import {DefaultCrudRepository} from '@loopback/repository';
import {Aplicacion, AplicacionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AplicacionRepository extends DefaultCrudRepository<
  Aplicacion,
  typeof Aplicacion.prototype.id,
  AplicacionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Aplicacion, dataSource);
  }
}
