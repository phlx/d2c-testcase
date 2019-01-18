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
import {ProviderCredential} from '../models';
import {ProviderCredentialRepository} from '../repositories';

export class ProviderCredentialController {
  constructor(
    @repository(ProviderCredentialRepository)
    public providerCredentialRepository : ProviderCredentialRepository,
  ) {}

  @post('/provider-credentials', {
    responses: {
      '200': {
        description: 'ProviderCredential model instance',
        content: {'application/json': {schema: {'x-ts-type': ProviderCredential}}},
      },
    },
  })
  async create(@requestBody() providerCredential: ProviderCredential): Promise<ProviderCredential> {
    return await this.providerCredentialRepository.create(providerCredential);
  }

  @get('/provider-credentials/count', {
    responses: {
      '200': {
        description: 'ProviderCredential model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ProviderCredential)) where?: Where,
  ): Promise<Count> {
    return await this.providerCredentialRepository.count(where);
  }

  @get('/provider-credentials', {
    responses: {
      '200': {
        description: 'Array of ProviderCredential model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ProviderCredential}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProviderCredential)) filter?: Filter,
  ): Promise<ProviderCredential[]> {
    return await this.providerCredentialRepository.find(filter);
  }

  @patch('/provider-credentials', {
    responses: {
      '200': {
        description: 'ProviderCredential PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() providerCredential: ProviderCredential,
    @param.query.object('where', getWhereSchemaFor(ProviderCredential)) where?: Where,
  ): Promise<Count> {
    return await this.providerCredentialRepository.updateAll(providerCredential, where);
  }

  @get('/provider-credentials/{id}', {
    responses: {
      '200': {
        description: 'ProviderCredential model instance',
        content: {'application/json': {schema: {'x-ts-type': ProviderCredential}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<ProviderCredential> {
    return await this.providerCredentialRepository.findById(id);
  }

  @patch('/provider-credentials/{id}', {
    responses: {
      '204': {
        description: 'ProviderCredential PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() providerCredential: ProviderCredential,
  ): Promise<void> {
    await this.providerCredentialRepository.updateById(id, providerCredential);
  }

  @put('/provider-credentials/{id}', {
    responses: {
      '204': {
        description: 'ProviderCredential PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() providerCredential: ProviderCredential,
  ): Promise<void> {
    await this.providerCredentialRepository.replaceById(id, providerCredential);
  }

  @del('/provider-credentials/{id}', {
    responses: {
      '204': {
        description: 'ProviderCredential DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.providerCredentialRepository.deleteById(id);
  }
}
