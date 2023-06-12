import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ToDoService } from './todo.service';
import { ToDoDto } from './todo.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../user/user.enum';
import { RolesGuard } from '../auth/role.guard';


@Roles(Role.ADMIN,Role.USER)
@UseGuards(AuthGuard,RolesGuard)
@Controller('todo')
export class ToDoController {
  constructor(
        private readonly todoService: ToDoService,
  ) {}


  @Post()
  async createTodo(
    @Body() todo:ToDoDto
  ){
    return await this.todoService.createToDo(todo);
  }

  @Get('id/:id')
  async findTodoById(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.todoService.findToDoById(id);
  }

  @Get()
  async findTodo(
    @Query() todoDto: ToDoDto
  ){
    return await this.todoService.findToDo(todoDto);
  }

  @Delete('id/:id')
  async deleteTodo(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.todoService.deleteToDo(id)
  }

  @Patch('id/:id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo:ToDoDto
  ){
    return await this.todoService.updateToDo(id,todo);
  }
}
