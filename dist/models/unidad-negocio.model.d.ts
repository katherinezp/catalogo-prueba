import { Entity } from '@loopback/repository';
export declare class UnidadNegocio extends Entity {
    id_un?: number;
    nombre: string;
    descripcion: string;
    constructor(data?: Partial<UnidadNegocio>);
}
export interface UnidadNegocioRelations {
}
export declare type UnidadNegocioWithRelations = UnidadNegocio & UnidadNegocioRelations;
