import { repository, Filter } from "@loopback/repository";
import { UnidadNegocioRepository } from "../repositories";
import { post, param, requestBody, get } from "@loopback/rest";
import { Integracion } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UnIntegracionesController {
  constructor(
    @repository(UnidadNegocioRepository) protected unidadNegocioRepo: UnidadNegocioRepository,
  ) {}

  @post('/un-integraciones/{id}/integraciones', {
    responses: {
      '200': {
        description: 'UnidadNegocio.Integracion model instance',
        content: {'application/json': {schema: {'x-ts-type': Integracion}}},
      },
    },
  })
  async create(
    @param.path.number('id') id: number,
    @requestBody() integracion: Integracion,
  ): Promise<Integracion> {
    return await this.unidadNegocioRepo.integraciones(id).create(integracion);
  }

  @get('/un-integraciones/{id}/integraciones', {
    responses: {
      '200': {
        description: "Array of integraciones belonging to unidad de negocio",
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Integracion}},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Integracion>,
  ): Promise<Integracion[]> {
    return await this.unidadNegocioRepo.integraciones(id).find(filter);
  }
}
