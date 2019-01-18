import {
  DefaultCrudRepository,
  juggler,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {TodoList, Todo} from '../models';
import {Getter, inject} from '@loopback/core';
import {TodoRepository} from './todo.repository';
import {MongoDataSource} from '../datasources';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id
> {
  public readonly todos: HasManyRepositoryFactory<
    Todo,
    typeof TodoList.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter(TodoRepository)
    protected todoRepostitoryGetter: Getter<TodoRepository>,
  ) {
    super(TodoList, dataSource);
    this.todos = this.createHasManyRepositoryFactoryFor(
      'todos',
      todoRepostitoryGetter,
    );
  }
}
