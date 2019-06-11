import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Tecnologia extends Entity {
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


  constructor(data?: Partial<Tecnologia>) {
    super(data);
  }
}

export interface TecnologiaRelations {
  // describe navigational properties here
}

export type TecnologiaWithRelations = Tecnologia & TecnologiaRelations;
