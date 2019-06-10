import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Pais extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  idPais?: number;

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


  constructor(data?: Partial<Pais>) {
    super(data);
  }
}

export interface PaisRelations {
  // describe navigational properties here
}

export type PaisWithRelations = Pais & PaisRelations;
