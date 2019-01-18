import {model, property, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {HostSpecification} from './host-specification.model';
import {Host} from './host.model';

@model()
export class ProviderType extends Base {
  @property({
    type: 'string',
    id: true,
    description: 'Provider type ID',
  })
  id?: string;

  @property({
    type: 'string',
    description: 'A full name of Provider',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    description: 'Provider alias',
    required: true,
  })
  alias: string;

  @hasMany(() => HostSpecification)
  hostSpecifications?: HostSpecification[];

  @hasMany(() => Host)
  hosts?: Host[];

  constructor(data?: Partial<ProviderType>) {
    super(data);
  }
}
