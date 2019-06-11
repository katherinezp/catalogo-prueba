import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {UnidadNegocio} from '../models';
import {UnidadNegocioRepository} from '../repositories';

export class UnidadNegocioController {
  constructor(
    @repository(UnidadNegocioRepository)
    public unidadNegocioRepository : UnidadNegocioRepository,
  ) {}

  @post('/unidad-negocios', {
    responses: {
      '200': {
        description: 'UnidadNegocio model instance',
        content: {'application/json': {schema: {'x-ts-type': UnidadNegocio}}},
      },
    },
  })
  async create(@requestBody() unidadNegocio: UnidadNegocio): Promise<UnidadNegocio> {
    return await this.unidadNegocioRepository.create(unidadNegocio);
  }

  @get('/unidad-negocios/count', {
    responses: {
      '200': {
        description: 'UnidadNegocio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(UnidadNegocio)) where?: Where<UnidadNegocio>,
  ): Promise<Count> {
    return await this.unidadNegocioRepository.count(where);
  }

  @get('/unidad-negocios', {
    responses: {
      '200': {
        description: 'Array of UnidadNegocio model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': UnidadNegocio}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(UnidadNegocio)) filter?: Filter<UnidadNegocio>,
  ): Promise<UnidadNegocio[]> {
    return await this.unidadNegocioRepository.find(filter);
  }

  @patch('/unidad-negocios', {
    responses: {
      '200': {
        description: 'UnidadNegocio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() unidadNegocio: UnidadNegocio,
    @param.query.object('where', getWhereSchemaFor(UnidadNegocio)) where?: Where<UnidadNegocio>,
  ): Promise<Count> {
    return await this.unidadNegocioRepository.updateAll(unidadNegocio, where);
  }

  @get('/unidad-negocios/{id}', {
    responses: {
      '200': {
        description: 'UnidadNegocio model instance',
        content: {'application/json': {schema: {'x-ts-type': UnidadNegocio}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<UnidadNegocio> {
    return await this.unidadNegocioRepository.findById(id);
  }

  @patch('/unidad-negocios/{id}', {
    responses: {
      '204': {
        description: 'UnidadNegocio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() unidadNegocio: UnidadNegocio,
  ): Promise<void> {
    await this.unidadNegocioRepository.updateById(id, unidadNegocio);
  }

  @put('/unidad-negocios/{id}', {
    responses: {
      '204': {
        description: 'UnidadNegocio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() unidadNegocio: UnidadNegocio,
  ): Promise<void> {
    await this.unidadNegocioRepository.replaceById(id, unidadNegocio);
  }

  @del('/unidad-negocios/{id}', {
    responses: {
      '204': {
        description: 'UnidadNegocio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.unidadNegocioRepository.deleteById(id);
  }
}
