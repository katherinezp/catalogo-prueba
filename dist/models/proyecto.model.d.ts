import { Entity } from '@loopback/repository';
export declare class Proyecto extends Entity {
    id?: number;
    epm: string;
    nombre: string;
    descripcion: string;
    constructor(data?: Partial<Proyecto>);
}
export interface ProyectoRelations {
}
export declare type ProyectoWithRelations = Proyecto & ProyectoRelations;
