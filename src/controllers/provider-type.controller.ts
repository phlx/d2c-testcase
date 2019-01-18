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
import {ProviderType} from '../models';
import {ProviderTypeRepository} from '../repositories';

export class ProviderTypeController {
  constructor(
    @repository(ProviderTypeRepository)
    public providerTypeRepository : ProviderTypeRepository,
  ) {}

  @post('/provider-types', {
    responses: {
      '200': {
        description: 'ProviderType model instance',
        content: {'application/json': {schema: {'x-ts-type': ProviderType}}},
      },
    },
  })
  async create(@requestBody() providerType: ProviderType): Promise<ProviderType> {
    return await this.providerTypeRepository.create(providerType);
  }

  @get('/provider-types/count', {
    responses: {
      '200': {
        description: 'ProviderType model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProviderType)) where?: Where,
  ): Promise<Count> {
    return await this.providerTypeRepository.count(where);
  }

  @get('/provider-types', {
    responses: {
      '200': {
        description: 'Array of ProviderType model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProviderType}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProviderType)) filter?: Filter,
  ): Promise<ProviderType[]> {
    return await this.providerTypeRepository.find(filter);
  }

  @patch('/provider-types', {
    responses: {
      '200': {
        description: 'ProviderType PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() providerType: ProviderType,
    @param.query.object('where', getWhereSchemaFor(ProviderType)) where?: Where,
  ): Promise<Count> {
    return await this.providerTypeRepository.updateAll(providerType, where);
  }

  @get('/provider-types/{id}', {
    responses: {
      '200': {
        description: 'ProviderType model instance',
        content: {'application/json': {schema: {'x-ts-type': ProviderType}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ProviderType> {
    return await this.providerTypeRepository.findById(id);
  }

  @patch('/provider-types/{id}', {
    responses: {
      '204': {
        description: 'ProviderType PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() providerType: ProviderType,
  ): Promise<void> {
    await this.providerTypeRepository.updateById(id, providerType);
  }

  @put('/provider-types/{id}', {
    responses: {
      '204': {
        description: 'ProviderType PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() providerType: ProviderType,
  ): Promise<void> {
    await this.providerTypeRepository.replaceById(id, providerType);
  }

  @del('/provider-types/{id}', {
    responses: {
      '204': {
        description: 'ProviderType DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.providerTypeRepository.deleteById(id);
  }
}
