import {Entity, model, property, hasMany} from '@loopback/repository';
import { Integracion, IntegracionWithRelations } from './integracion.model';

@model({settings: {}})
export class UnidadNegocio extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id_un?: number;

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

  @hasMany(() => Integracion)
  integraciones?: Integracion[];

  constructor(data?: Partial<UnidadNegocio>) {
    super(data);
  }
}

export interface UnidadNegocioRelations {
  // describe navigational properties here
  integraciones?: IntegracionWithRelations[];
}

export type UnidadNegocioWithRelations = UnidadNegocio & UnidadNegocioRelations;
