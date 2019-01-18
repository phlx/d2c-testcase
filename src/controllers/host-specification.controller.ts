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
import {HostSpecification, ProviderType} from '../models';
import {HostSpecificationRepository} from '../repositories';

export class HostSpecificationController {
  constructor(
    @repository(HostSpecificationRepository)
    public hostSpecificationRepository: HostSpecificationRepository,
  ) {}

  @post('/host-specifications', {
    responses: {
      '200': {
        description: 'HostSpecification model instance',
        content: {
          'application/json': {schema: {'x-ts-type': HostSpecification}},
        },
      },
    },
  })
  async create(
    @requestBody() hostSpecification: HostSpecification,
  ): Promise<HostSpecification> {
    return await this.hostSpecificationRepository.create(hostSpecification);
  }

  @get('/host-specifications/count', {
    responses: {
      '200': {
        description: 'HostSpecification model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(HostSpecification))
    where?: Where,
  ): Promise<Count> {
    return await this.hostSpecificationRepository.count(where);
  }

  @get('/host-specifications', {
    responses: {
      '200': {
        description: 'Array of HostSpecification model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': HostSpecification}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(HostSpecification))
    filter?: Filter,
  ): Promise<HostSpecification[]> {
    return await this.hostSpecificationRepository.find(filter);
  }

  @patch('/host-specifications', {
    responses: {
      '200': {
        description: 'HostSpecification PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() hostSpecification: HostSpecification,
    @param.query.object('where', getWhereSchemaFor(HostSpecification))
    where?: Where,
  ): Promise<Count> {
    return await this.hostSpecificationRepository.updateAll(
      hostSpecification,
      where,
    );
  }

  @get('/host-specifications/{id}', {
    responses: {
      '200': {
        description: 'HostSpecification model instance',
        content: {
          'application/json': {schema: {'x-ts-type': HostSpecification}},
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: typeof HostSpecification.prototype.id,
  ): Promise<HostSpecification> {
    return await this.hostSpecificationRepository.findById(id);
  }

  @get('/host-specifications/{id}/provider-type', {
    responses: {
      '200': {
        description: 'ProviderType of HostSpecification model instance',
        content: {
          'application/json': {schema: {'x-ts-type': ProviderType}},
        },
      },
    },
  })
  async findProviderTypeById(
    @param.path.string('id')
    hostSpecificationId: typeof HostSpecification.prototype.id,
  ): Promise<ProviderType> {
    return await this.hostSpecificationRepository.providerType(
      hostSpecificationId,
    );
  }

  @patch('/host-specifications/{id}', {
    responses: {
      '204': {
        description: 'HostSpecification PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() hostSpecification: HostSpecification,
  ): Promise<void> {
    await this.hostSpecificationRepository.updateById(id, hostSpecification);
  }

  @put('/host-specifications/{id}', {
    responses: {
      '204': {
        description: 'HostSpecification PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hostSpecification: HostSpecification,
  ): Promise<void> {
    await this.hostSpecificationRepository.replaceById(id, hostSpecification);
  }

  @del('/host-specifications/{id}', {
    responses: {
      '204': {
        description: 'HostSpecification DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hostSpecificationRepository.deleteById(id);
  }
}
