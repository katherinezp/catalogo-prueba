import { Entity } from '@loopback/repository';
export declare class EstadoIntegracion extends Entity {
    id?: number;
    nombre?: string;
    constructor(data?: Partial<EstadoIntegracion>);
}
export interface EstadoIntegracionRelations {
}
export declare type EstadoIntegracionWithRelations = EstadoIntegracion & EstadoIntegracionRelations;
