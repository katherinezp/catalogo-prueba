import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { UnidadNegocio, UnidadNegocioRelations, Integracion } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { IntegracionRepository } from './integracion.repository';
export declare class UnidadNegocioRepository extends DefaultCrudRepository<UnidadNegocio, typeof UnidadNegocio.prototype.id_un, UnidadNegocioRelations> {
    protected integracionRepositoryGetter: Getter<IntegracionRepository>;
    readonly integraciones: HasManyRepositoryFactory<Integracion, typeof UnidadNegocio.prototype.id_un>;
    constructor(dataSource: DbDataSource, integracionRepositoryGetter: Getter<IntegracionRepository>);
}
