import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTable } from '../user/user.model';
import { Repository } from 'typeorm';
import { AuthDto } from './auth.dto';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{

  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserTable) private readonly userRepository: Repository<UserTable>
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async login(loginUser: AuthDto){
    const user = await this.userRepository.findOne({where: {fullName:loginUser.fullName,password:loginUser.password}})
    if(user == null || user == undefined){
        throw new NotFoundException('User not found');
    }
    else{
        const jwt = await this.jwtService.signAsync({id: user.id, role:user.role})
        console.log(user, jwt);
        return {
            token:jwt
        }
    }
  }

  async findUserById(id: number):Promise<UserTable>{
    return this.userRepository.findOne({where: {id: id}});
  }


}
