import {DefaultCrudRepository} from '@loopback/repository';
import {EstadoIntegracion, EstadoIntegracionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstadoIntegracionRepository extends DefaultCrudRepository<
  EstadoIntegracion,
  typeof EstadoIntegracion.prototype.id,
  EstadoIntegracionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EstadoIntegracion, dataSource);
  }
}
