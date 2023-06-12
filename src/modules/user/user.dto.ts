import { Role } from './user.enum'
import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsNumber,
    IsBoolean,
} from 'class-validator'
export class UserDto {

      @IsString()
      role?: Role
      
      @IsString()
      fullName?: string

      @IsString()
      password?: string

}