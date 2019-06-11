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
import {Aplicacion} from '../models';
import {AplicacionRepository} from '../repositories';

export class AplicacionController {
  constructor(
    @repository(AplicacionRepository)
    public aplicacionRepository : AplicacionRepository,
  ) {}

  @post('/aplicacions', {
    responses: {
      '200': {
        description: 'Aplicacion model instance',
        content: {'application/json': {schema: {'x-ts-type': Aplicacion}}},
      },
    },
  })
  async create(@requestBody() aplicacion: Aplicacion): Promise<Aplicacion> {
    return await this.aplicacionRepository.create(aplicacion);
  }

  @get('/aplicacions/count', {
    responses: {
      '200': {
        description: 'Aplicacion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aplicacion)) where?: Where<Aplicacion>,
  ): Promise<Count> {
    return await this.aplicacionRepository.count(where);
  }

  @get('/aplicacions', {
    responses: {
      '200': {
        description: 'Array of Aplicacion model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Aplicacion}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aplicacion)) filter?: Filter<Aplicacion>,
  ): Promise<Aplicacion[]> {
    return await this.aplicacionRepository.find(filter);
  }

  @patch('/aplicacions', {
    responses: {
      '200': {
        description: 'Aplicacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() aplicacion: Aplicacion,
    @param.query.object('where', getWhereSchemaFor(Aplicacion)) where?: Where<Aplicacion>,
  ): Promise<Count> {
    return await this.aplicacionRepository.updateAll(aplicacion, where);
  }

  @get('/aplicacions/{id}', {
    responses: {
      '200': {
        description: 'Aplicacion model instance',
        content: {'application/json': {schema: {'x-ts-type': Aplicacion}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Aplicacion> {
    return await this.aplicacionRepository.findById(id);
  }

  @patch('/aplicacions/{id}', {
    responses: {
      '204': {
        description: 'Aplicacion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() aplicacion: Aplicacion,
  ): Promise<void> {
    await this.aplicacionRepository.updateById(id, aplicacion);
  }

  @put('/aplicacions/{id}', {
    responses: {
      '204': {
        description: 'Aplicacion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aplicacion: Aplicacion,
  ): Promise<void> {
    await this.aplicacionRepository.replaceById(id, aplicacion);
  }

  @del('/aplicacions/{id}', {
    responses: {
      '204': {
        description: 'Aplicacion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aplicacionRepository.deleteById(id);
  }
}
