import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Role } from './user.enum';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/role.guard';
import { AuthGuard } from '../auth/auth.guard';

@Roles(Role.ADMIN)
@UseGuards(AuthGuard,RolesGuard)
@Controller('user')
export class UserController {
  constructor(
        private readonly userService: UserService,
  ) {}


  @Post()
  async createUser(
    @Body() user:UserDto
  ){
    return await this.userService.createUser(user);
  }

  @Get('id/:id')
  async findUserById(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.userService.findUserById(id);
  }

  @Get()
  async findUser(
    @Query() userDto: UserDto
  ){
    return await this.userService.findUser(userDto);
  }

  @Delete('id/:id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number
  ){
    return await this.userService.deleteUser(id)
  }

  @Patch('id/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user:UserDto
  ){
    return await this.userService.updateUser(id,user);
  }
}
