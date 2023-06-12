import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoTable } from './todo.model';
import { ToDoService } from './todo.service';
import { ToDoController } from './todo.controller';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { UserTable } from '../user/user.model';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([TodoTable]),
    TypeOrmModule.forFeature([UserTable]),

  ],
  controllers: [
    ToDoController
  ],
  providers: [
    ToDoService,
    AuthService,
    RolesGuard,
  ],
})
export class ToDoModule {}
