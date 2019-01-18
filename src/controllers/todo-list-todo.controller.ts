import {repository} from '@loopback/repository';
import {TodoListRepository} from '../repositories';
import {post, param, requestBody} from '@loopback/rest';
import {Todo} from '../models';

export class TodoListTodoController {
  constructor(
    @repository(TodoListRepository) protected todoListRepo: TodoListRepository,
  ) {}

  @post('/todo-lists/{id}/todos')
  async create(@param.path.string('id') id: string, @requestBody() todo: Todo) {
    return await this.todoListRepo.todos(id).create(todo);
  }
}
