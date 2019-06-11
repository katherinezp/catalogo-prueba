import {DefaultCrudRepository} from '@loopback/repository';
import {Pais, PaisRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaisRepository extends DefaultCrudRepository<
  Pais,
  typeof Pais.prototype.idPais,
  PaisRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pais, dataSource);
  }
}
