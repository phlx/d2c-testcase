import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ProviderCredential} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProviderCredentialRepository extends DefaultCrudRepository<
  ProviderCredential,
  typeof ProviderCredential.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ProviderCredential, dataSource);
  }
}
