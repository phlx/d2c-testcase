import {model, property, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {ProviderCredential} from './provider-credential.model';
import {Host} from './host.model';

@model()
export class User extends Base {
  @property({
    type: 'string',
    id: true,
    description: 'User ID',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    description: 'User displayed name',
  })
  displayName: string;

  @hasMany(() => ProviderCredential)
  providerCredentials?: ProviderCredential[];

  @hasMany(() => Host)
  hosts?: Host[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}
