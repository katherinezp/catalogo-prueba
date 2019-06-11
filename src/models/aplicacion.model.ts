import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Aplicacion extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  sox: string;


  constructor(data?: Partial<Aplicacion>) {
    super(data);
  }
}

export interface AplicacionRelations {
  // describe navigational properties here
}

export type AplicacionWithRelations = Aplicacion & AplicacionRelations;
