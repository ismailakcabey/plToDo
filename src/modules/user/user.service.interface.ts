import { UserDto } from "./user.dto";

export interface UserServiceInterface{
    getHello();
    createUser(createUser:UserDto);
    findUserById(id:number);
    findUser(user:UserDto);
    deleteUser(id:number);
    updateUser(id:number, updateUser:UserDto);
}

