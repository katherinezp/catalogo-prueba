import { Entity } from '@loopback/repository';
export declare class Tecnologia extends Entity {
    id?: number;
    nombre: string;
    constructor(data?: Partial<Tecnologia>);
}
export interface TecnologiaRelations {
}
export declare type TecnologiaWithRelations = Tecnologia & TecnologiaRelations;
