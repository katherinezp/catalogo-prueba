import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {UnidadNegocio, UnidadNegocioRelations, Integracion} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { IntegracionRepository } from './integracion.repository';

export class UnidadNegocioRepository extends DefaultCrudRepository<
  UnidadNegocio,
  typeof UnidadNegocio.prototype.id_un,
  UnidadNegocioRelations
> {

  public readonly integraciones: HasManyRepositoryFactory<
    Integracion,
    typeof UnidadNegocio.prototype.id_un
  >;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(IntegracionRepository)
    protected integracionRepositoryGetter: Getter<IntegracionRepository>,
  ) {
    super(UnidadNegocio, dataSource);
    this.integraciones = this.createHasManyRepositoryFactoryFor(
      'integraciones',
      integracionRepositoryGetter,
    );
  }
}
