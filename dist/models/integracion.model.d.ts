import { Entity } from '@loopback/repository';
import { UnidadNegocioWithRelations } from './unidad-negocio.model';
import { PaisWithRelations } from './pais.model';
import { ProyectoWithRelations } from './proyecto.model';
import { AplicacionWithRelations } from './aplicacion.model';
import { TecnologiaWithRelations } from './tecnologia.model';
export declare class Integracion extends Entity {
    idInt?: number;
    codigoInt: string;
    nombre: string;
    descripcion: string;
    fecha_alta: Date;
    fecha_modificacion: Date;
    proyectoId: number;
    unId: number;
    paisId: number;
    aplicacion_origenId: number;
    aplicacion_destinoId: number;
    tecnologiaId: number;
    constructor(data?: Partial<Integracion>);
}
export interface IntegracionRelations {
    unId?: UnidadNegocioWithRelations;
    paisId?: PaisWithRelations;
    proyectoId?: ProyectoWithRelations;
    aplicacion_origenId?: AplicacionWithRelations;
    aplicacion_destinoId?: AplicacionWithRelations;
    tecnologiaId?: TecnologiaWithRelations;
}
export declare type IntegracionWithRelations = Integracion & IntegracionRelations;
