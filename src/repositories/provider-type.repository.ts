import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ProviderType} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProviderTypeRepository extends DefaultCrudRepository<
  ProviderType,
  typeof ProviderType.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ProviderType, dataSource);
  }
}
