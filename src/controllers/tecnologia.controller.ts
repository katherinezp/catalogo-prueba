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
import {Tecnologia} from '../models';
import {TecnologiaRepository} from '../repositories';

export class TecnologiaController {
  constructor(
    @repository(TecnologiaRepository)
    public tecnologiaRepository : TecnologiaRepository,
  ) {}

  @post('/tecnologias', {
    responses: {
      '200': {
        description: 'Tecnologia model instance',
        content: {'application/json': {schema: {'x-ts-type': Tecnologia}}},
      },
    },
  })
  async create(@requestBody() tecnologia: Tecnologia): Promise<Tecnologia> {
    return await this.tecnologiaRepository.create(tecnologia);
  }

  @get('/tecnologias/count', {
    responses: {
      '200': {
        description: 'Tecnologia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Tecnologia)) where?: Where<Tecnologia>,
  ): Promise<Count> {
    return await this.tecnologiaRepository.count(where);
  }

  @get('/tecnologias', {
    responses: {
      '200': {
        description: 'Array of Tecnologia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Tecnologia}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Tecnologia)) filter?: Filter<Tecnologia>,
  ): Promise<Tecnologia[]> {
    return await this.tecnologiaRepository.find(filter);
  }

  @patch('/tecnologias', {
    responses: {
      '200': {
        description: 'Tecnologia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() tecnologia: Tecnologia,
    @param.query.object('where', getWhereSchemaFor(Tecnologia)) where?: Where<Tecnologia>,
  ): Promise<Count> {
    return await this.tecnologiaRepository.updateAll(tecnologia, where);
  }

  @get('/tecnologias/{id}', {
    responses: {
      '200': {
        description: 'Tecnologia model instance',
        content: {'application/json': {schema: {'x-ts-type': Tecnologia}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Tecnologia> {
    return await this.tecnologiaRepository.findById(id);
  }

  @patch('/tecnologias/{id}', {
    responses: {
      '204': {
        description: 'Tecnologia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() tecnologia: Tecnologia,
  ): Promise<void> {
    await this.tecnologiaRepository.updateById(id, tecnologia);
  }

  @put('/tecnologias/{id}', {
    responses: {
      '204': {
        description: 'Tecnologia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tecnologia: Tecnologia,
  ): Promise<void> {
    await this.tecnologiaRepository.replaceById(id, tecnologia);
  }

  @del('/tecnologias/{id}', {
    responses: {
      '204': {
        description: 'Tecnologia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tecnologiaRepository.deleteById(id);
  }
}
