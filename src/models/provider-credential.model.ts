import {model, property, belongsTo} from '@loopback/repository';
import {Base} from './base.model';
import {User} from './user.model';
import {ProviderType} from './provider-type.model';

@model()
export class ProviderCredential extends Base {
  @property({
    type: 'string',
    id: true,
    description: 'Provider credential ID',
  })
  id?: string;

  /*
  @property({
    type: 'string',
    description: 'ID of owner user',
    required: true,
  })
  */
  @belongsTo(() => User)
  userId: string;

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
    type: 'object',
    description: 'Object with credentials key=>value pairs',
    required: true,
  })
  credentials: object;

  constructor(data?: Partial<ProviderCredential>) {
    super(data);
  }
}
