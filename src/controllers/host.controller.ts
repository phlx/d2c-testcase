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
import {Host} from '../models';
import {HostRepository} from '../repositories';

export class HostController {
  constructor(
    @repository(HostRepository)
    public hostRepository : HostRepository,
  ) {}

  @post('/hosts', {
    responses: {
      '200': {
        description: 'Host model instance',
        content: {'application/json': {schema: {'x-ts-type': Host}}},
      },
    },
  })
  async create(@requestBody() host: Host): Promise<Host> {
    return await this.hostRepository.create(host);
  }

  @get('/hosts/count', {
    responses: {
      '200': {
        description: 'Host model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Host)) where?: Where,
  ): Promise<Count> {
    return await this.hostRepository.count(where);
  }

  @get('/hosts', {
    responses: {
      '200': {
        description: 'Array of Host model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Host}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Host)) filter?: Filter,
  ): Promise<Host[]> {
    return await this.hostRepository.find(filter);
  }

  @patch('/hosts', {
    responses: {
      '200': {
        description: 'Host PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() host: Host,
    @param.query.object('where', getWhereSchemaFor(Host)) where?: Where,
  ): Promise<Count> {
    return await this.hostRepository.updateAll(host, where);
  }

  @get('/hosts/{id}', {
    responses: {
      '200': {
        description: 'Host model instance',
        content: {'application/json': {schema: {'x-ts-type': Host}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Host> {
    return await this.hostRepository.findById(id);
  }

  @patch('/hosts/{id}', {
    responses: {
      '204': {
        description: 'Host PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() host: Host,
  ): Promise<void> {
    await this.hostRepository.updateById(id, host);
  }

  @put('/hosts/{id}', {
    responses: {
      '204': {
        description: 'Host PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() host: Host,
  ): Promise<void> {
    await this.hostRepository.replaceById(id, host);
  }

  @del('/hosts/{id}', {
    responses: {
      '204': {
        description: 'Host DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hostRepository.deleteById(id);
  }
}
