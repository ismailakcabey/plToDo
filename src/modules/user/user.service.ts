import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from './user.model';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { UserServiceInterface } from './user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface{

  constructor(
    @InjectRepository(UserTable) private readonly userRepository: Repository<UserTable>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(createUser: UserDto){
    const newUser = this.userRepository.create(createUser);
    return this.userRepository.save(newUser);
  }

  async findUserById(id: number):Promise<UserTable>{
    return this.userRepository.findOne({where: {id: id},
      relations: ['user'],
      //select: ['id', 'title','description'], // Sadece istenen alanları seçin
      //loadRelationIds: true
    });
  }

  async findUser(user: UserDto):Promise<UserTable[]>{
    return this.userRepository.find({where: user,
    //relations: ['user'],
      //select: ['id', 'title','description'], // Sadece istenen alanları seçin
      loadRelationIds: true});
  }

  async deleteUser(id: number){
    return this.userRepository.delete(id);
  }

  async updateUser(id:number,updateUser: UserDto){
    const user = await this.userRepository.findOne({where:{id:id}});
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUser);
    return this.userRepository.save(user);
  }

}
