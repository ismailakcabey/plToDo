import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTable } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([UserTable]),
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
})
export class UserModule {}
