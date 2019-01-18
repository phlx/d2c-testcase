import {model, property, belongsTo} from '@loopback/repository';
import {Base} from './base.model';
import {ProviderType} from './provider-type.model';

@model()
export class HostSpecification extends Base {
  @property({
    type: 'string',
    id: true,
    description: 'Host specification ID',
  })
  id?: string;

  /*
  @property({
    type: 'string',
    description: 'ID of provider type',
    required: true,
  })
  */
  @belongsTo(() => ProviderType)
  providerTypeId: string;

  @property({
    type: 'string',
    description: 'Specification name',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    description: 'Number of CPUs',
    required: true,
  })
  cpus: number;

  @property({
    type: 'number',
    description: 'RAM (in megabytes)',
    required: true,
  })
  memory: number;

  @property({
    type: 'number',
    description: 'HDD (in gigabytes)',
    required: true,
  })
  disk: number;

  @property({
    type: 'string',
    descirption: 'Operational system (name, version, architecture)',
    required: true,
    default: 'ubuntu-16-04-x64',
  })
  os: string;

  constructor(data?: Partial<HostSpecification>) {
    super(data);
  }
}
