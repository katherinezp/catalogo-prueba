import { Entity } from '@loopback/repository';
import { Integracion, IntegracionWithRelations } from './integracion.model';
export declare class UnidadNegocio extends Entity {
    id_un?: number;
    nombre: string;
    descripcion: string;
    integraciones?: Integracion[];
    constructor(data?: Partial<UnidadNegocio>);
}
export interface UnidadNegocioRelations {
    integraciones?: IntegracionWithRelations[];
}
export declare type UnidadNegocioWithRelations = UnidadNegocio & UnidadNegocioRelations;
