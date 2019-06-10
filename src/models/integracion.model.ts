import {Entity, model, property} from '@loopback/repository';
import { UnidadNegocioRelations, UnidadNegocioWithRelations } from './unidad-negocio.model';
import { PaisWithRelations } from './pais.model';

@model({settings: {}})
export class Integracion extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  idInt?: number;

  @property({
    type: 'string',
    required: true,
  })
  codigoInt: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property()
  unId: number;

  @property()
  paisId: number;

  constructor(data?: Partial<Integracion>) {
    super(data);
  }
}

export interface IntegracionRelations {
  // describe navigational properties here
  unId?: UnidadNegocioWithRelations;
  paisId?: PaisWithRelations;
}

export type IntegracionWithRelations = Integracion & IntegracionRelations;
