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
import {EstadoIntegracion} from '../models';
import {EstadoIntegracionRepository} from '../repositories';

export class EstadoIntegracionController {
  constructor(
    @repository(EstadoIntegracionRepository)
    public estadoIntegracionRepository : EstadoIntegracionRepository,
  ) {}

  @post('/estado-integracions', {
    responses: {
      '200': {
        description: 'EstadoIntegracion model instance',
        content: {'application/json': {schema: {'x-ts-type': EstadoIntegracion}}},
      },
    },
  })
  async create(@requestBody() estadoIntegracion: EstadoIntegracion): Promise<EstadoIntegracion> {
    return await this.estadoIntegracionRepository.create(estadoIntegracion);
  }

  @get('/estado-integracions/count', {
    responses: {
      '200': {
        description: 'EstadoIntegracion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EstadoIntegracion)) where?: Where<EstadoIntegracion>,
  ): Promise<Count> {
    return await this.estadoIntegracionRepository.count(where);
  }

  @get('/estado-integracions', {
    responses: {
      '200': {
        description: 'Array of EstadoIntegracion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': EstadoIntegracion}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EstadoIntegracion)) filter?: Filter<EstadoIntegracion>,
  ): Promise<EstadoIntegracion[]> {
    return await this.estadoIntegracionRepository.find(filter);
  }

  @patch('/estado-integracions', {
    responses: {
      '200': {
        description: 'EstadoIntegracion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() estadoIntegracion: EstadoIntegracion,
    @param.query.object('where', getWhereSchemaFor(EstadoIntegracion)) where?: Where<EstadoIntegracion>,
  ): Promise<Count> {
    return await this.estadoIntegracionRepository.updateAll(estadoIntegracion, where);
  }

  @get('/estado-integracions/{id}', {
    responses: {
      '200': {
        description: 'EstadoIntegracion model instance',
        content: {'application/json': {schema: {'x-ts-type': EstadoIntegracion}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<EstadoIntegracion> {
    return await this.estadoIntegracionRepository.findById(id);
  }

  @patch('/estado-integracions/{id}', {
    responses: {
      '204': {
        description: 'EstadoIntegracion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() estadoIntegracion: EstadoIntegracion,
  ): Promise<void> {
    await this.estadoIntegracionRepository.updateById(id, estadoIntegracion);
  }

  @put('/estado-integracions/{id}', {
    responses: {
      '204': {
        description: 'EstadoIntegracion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estadoIntegracion: EstadoIntegracion,
  ): Promise<void> {
    await this.estadoIntegracionRepository.replaceById(id, estadoIntegracion);
  }

  @del('/estado-integracions/{id}', {
    responses: {
      '204': {
        description: 'EstadoIntegracion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estadoIntegracionRepository.deleteById(id);
  }
}
