import { ToDoDto } from "./todo.dto";

export interface ToDoServiceInterface{
    getHello():string;
    createToDo(createTodo:ToDoDto);
    findToDoById(id:number);
    findToDo(todo:ToDoDto);
    deleteToDo(id:number);
    updateToDo(id:number, updateUser:ToDoDto);
}