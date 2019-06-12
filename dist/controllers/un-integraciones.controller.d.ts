import { Filter } from "@loopback/repository";
import { UnidadNegocioRepository } from "../repositories";
import { Integracion } from "../models";
export declare class UnIntegracionesController {
    protected unidadNegocioRepo: UnidadNegocioRepository;
    constructor(unidadNegocioRepo: UnidadNegocioRepository);
    create(id: number, integracion: Integracion): Promise<Integracion>;
    find(id: number, filter?: Filter<Integracion>): Promise<Integracion[]>;
}
