import {Entity, model, property} from '@loopback/repository';
import { UnidadNegocioRelations, UnidadNegocioWithRelations } from './unidad-negocio.model';
import { PaisWithRelations } from './pais.model';
import { ProyectoWithRelations } from './proyecto.model';
import { AplicacionWithRelations } from './aplicacion.model';
import { TecnologiaWithRelations } from './tecnologia.model';

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

  @property({
    type: Date,
    required: true
  })
  fecha_alta: Date;

  @property({
    type: Date
  })
  fecha_modificacion: Date;

  @property()
  proyectoId: number;

  @property()
  unId: number;

  @property()
  paisId: number;

  @property()
  aplicacion_origenId: number;

  @property()
  aplicacion_destinoId: number;

  @property()
  tecnologiaId: number;
  

  constructor(data?: Partial<Integracion>) {
    super(data);
  }
}

export interface IntegracionRelations {
  // describe navigational properties here
  unId?: UnidadNegocioWithRelations;
  paisId?: PaisWithRelations;
  proyectoId?: ProyectoWithRelations;
  aplicacion_origenId?: AplicacionWithRelations;
  aplicacion_destinoId?: AplicacionWithRelations;
  tecnologiaId?: TecnologiaWithRelations;
}

export type IntegracionWithRelations = Integracion & IntegracionRelations;
