import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Host} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HostRepository extends DefaultCrudRepository<
  Host,
  typeof Host.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Host, dataSource);
  }
}
