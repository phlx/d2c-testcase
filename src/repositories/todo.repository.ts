import {
  DefaultCrudRepository,
  juggler,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import {Todo, TodoList} from '../models';
import {DbDataSource, MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {TodoListRepository} from './todo-list.repository';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  // public readonly todoList: BelongsToAccessor<
  // TodoList,
  // typeof TodoList.prototype.id
  // >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('TodoListRepository')
    protected todoListRepostitoryGetter: Getter<TodoListRepository>,
  ) {
    super(Todo, dataSource);
    // this.todoList = this.createBelongsToAccessorFor(
    // 'todoList',
    // todoListRepostitoryGetter,
    // );
  }
}
