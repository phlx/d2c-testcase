import {
  Entity,
  model,
  property,
  hasMany,
  RelationType,
} from '@loopback/repository';
import {Todo} from './todo.model';

@model()
export class TodoList extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;

  @hasMany(() => Todo, {keyTo: 'todoListId'})
  todos?: Todo[];

  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}
