import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<UnidadNegocio>) {
    super(data);
  }
}

export interface UnidadNegocioRelations {
  // describe navigational properties here
}

export type UnidadNegocioWithRelations = UnidadNegocio & UnidadNegocioRelations;
