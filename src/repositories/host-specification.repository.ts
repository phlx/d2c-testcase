import {
  DefaultCrudRepository,
  juggler,
  repository,
  BelongsToAccessor,
  HasOneRepositoryFactory,
} from '@loopback/repository';
import {HostSpecification, ProviderType} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProviderTypeRepository} from './provider-type.repository';

export class HostSpecificationRepository extends DefaultCrudRepository<
  HostSpecification,
  typeof HostSpecification.prototype.id
> {
  public readonly providerType: BelongsToAccessor<
    ProviderType,
    typeof HostSpecification.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('ProviderTypeRepository')
    providerTypeRepositoryGetter: Getter<ProviderTypeRepository>,
  ) {
    super(HostSpecification, dataSource);
    this.providerType = this.createBelongsToAccessorFor(
      'providerType',
      providerTypeRepositoryGetter,
    );
  }
}
