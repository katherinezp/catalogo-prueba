import {DefaultCrudRepository} from '@loopback/repository';
import {UnidadNegocio, UnidadNegocioRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UnidadNegocioRepository extends DefaultCrudRepository<
  UnidadNegocio,
  typeof UnidadNegocio.prototype.id_un,
  UnidadNegocioRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UnidadNegocio, dataSource);
  }
}
