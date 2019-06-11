import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class EstadoIntegracion extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nombre?: string;


  constructor(data?: Partial<EstadoIntegracion>) {
    super(data);
  }
}

export interface EstadoIntegracionRelations {
  // describe navigational properties here
}

export type EstadoIntegracionWithRelations = EstadoIntegracion & EstadoIntegracionRelations;
