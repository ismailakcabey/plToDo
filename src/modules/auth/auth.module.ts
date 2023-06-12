import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserTable } from '../user/user.model';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './role.guard';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([UserTable])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService
  ],
  exports:[
    AuthService,
  ]
})
export class AuthModule {}
