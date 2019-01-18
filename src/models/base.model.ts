import {Entity, model} from '@loopback/repository';

@model()
export class Base extends Entity {
  constructor(data?: Partial<Base>) {
    super(data);
  }
}
