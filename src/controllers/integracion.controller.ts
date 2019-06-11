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
import {Integracion} from '../models';
import {IntegracionRepository} from '../repositories';

export class IntegracionController {
  constructor(
    @repository(IntegracionRepository)
    public integracionRepository : IntegracionRepository,
  ) {}

  @post('/integracions', {
    responses: {
      '200': {
        description: 'Integracion model instance',
        content: {'application/json': {schema: {'x-ts-type': Integracion}}},
      },
    },
  })
  async create(@requestBody() integracion: Integracion): Promise<Integracion> {
    return await this.integracionRepository.create(integracion);
  }

  @get('/integracions/count', {
    responses: {
      '200': {
        description: 'Integracion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Integracion)) where?: Where<Integracion>,
  ): Promise<Count> {
    return await this.integracionRepository.count(where);
  }

  @get('/integracions', {
    responses: {
      '200': {
        description: 'Array of Integracion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Integracion}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Integracion)) filter?: Filter<Integracion>,
  ): Promise<Integracion[]> {
    return await this.integracionRepository.find(filter);
  }

  @patch('/integracions', {
    responses: {
      '200': {
        description: 'Integracion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() integracion: Integracion,
    @param.query.object('where', getWhereSchemaFor(Integracion)) where?: Where<Integracion>,
  ): Promise<Count> {
    return await this.integracionRepository.updateAll(integracion, where);
  }

  @get('/integracions/{id}', {
    responses: {
      '200': {
        description: 'Integracion model instance',
        content: {'application/json': {schema: {'x-ts-type': Integracion}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Integracion> {
    return await this.integracionRepository.findById(id);
  }

  @patch('/integracions/{id}', {
    responses: {
      '204': {
        description: 'Integracion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() integracion: Integracion,
  ): Promise<void> {
    await this.integracionRepository.updateById(id, integracion);
  }

  @put('/integracions/{id}', {
    responses: {
      '204': {
        description: 'Integracion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() integracion: Integracion,
  ): Promise<void> {
    await this.integracionRepository.replaceById(id, integracion);
  }

  @del('/integracions/{id}', {
    responses: {
      '204': {
        description: 'Integracion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.integracionRepository.deleteById(id);
  }
}
