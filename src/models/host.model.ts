import {model, property, belongsTo} from '@loopback/repository';
import {Base} from './base.model';
import {User} from './user.model';

@model()
export class Host extends Base {
  @property({
    type: 'string',
    id: true,
    description: 'Host ID',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    description: 'Hostname',
  })
  hostname: string;

  @property({
    type: 'string',
    description: 'IP address',
  })
  ip?: string;

  @property({
    type: 'string',
    description: 'Current status of host',
    required: true,
  })
  status: string;

  /*
  @property({
    type: 'string',
    description: 'ID of owner user',
    required: true,
  })
  */
  @belongsTo(() => User)
  userId: string;

  @property({
    type: 'string',
    description: 'ID of provider specification',
    required: true,
  })
  specificationId: string;

  constructor(data?: Partial<Host>) {
    super(data);
  }
}
