import { Entity } from '@loopback/repository';
export declare class Aplicacion extends Entity {
    id?: number;
    nombre: string;
    codigo: string;
    descripcion: string;
    sox: string;
    constructor(data?: Partial<Aplicacion>);
}
export interface AplicacionRelations {
}
export declare type AplicacionWithRelations = Aplicacion & AplicacionRelations;
