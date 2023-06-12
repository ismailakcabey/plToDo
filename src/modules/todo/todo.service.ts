import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { TodoTable } from './todo.model';
import { ToDoDto } from './todo.dto';
import { ToDoServiceInterface } from './todo.service.interface';


@Injectable()
export class ToDoService implements ToDoServiceInterface{

  constructor(
    @InjectRepository(TodoTable) private readonly todoRepository: Repository<TodoTable>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async createToDo(createToDo: ToDoDto){
    const newToDo = this.todoRepository.create(createToDo);
    return this.todoRepository.save(newToDo);
  }

  async findToDoById(id: number):Promise<TodoTable>{
    return this.todoRepository.findOne({where: {id: id},
    relations: ['user'],
    //select: ['id', 'title','description'], // Sadece istenen alanları seçin
    //loadRelationIds: true
  });
  }

  async findToDo(todo: ToDoDto):Promise<TodoTable[]>{
    return this.todoRepository.find({where: todo,
      //relations: ["user"],
      loadRelationIds: true
    });
  }

  async deleteToDo(id: number){
    return this.todoRepository.delete(id);
  }

  async updateToDo(id:number,updateToDo: ToDoDto){
    const todo = await this.todoRepository.findOne({where:{id:id}});
    if (!todo) {
      throw new NotFoundException('todo not found');
    }
    Object.assign(todo, updateToDo);
    return this.todoRepository.save(todo);
  }

}
