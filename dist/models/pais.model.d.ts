import { Entity } from '@loopback/repository';
export declare class Pais extends Entity {
    idPais?: number;
    nombre: string;
    descripcion: string;
    constructor(data?: Partial<Pais>);
}
export interface PaisRelations {
}
export declare type PaisWithRelations = Pais & PaisRelations;
