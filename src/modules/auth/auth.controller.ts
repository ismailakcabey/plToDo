import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';



@Controller('login')
export class AuthController {
  constructor(
        private readonly authService: AuthService,
  ) {}


  @Post()
  async login(
    @Body() user:AuthDto
  ){
    return await this.authService.login(user);
  }
}
