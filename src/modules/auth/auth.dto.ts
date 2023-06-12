import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsNumber,
    IsBoolean,
} from 'class-validator'
export class AuthDto {

      @IsString()
      fullName?: string
      
      @IsString()
      password?: string


}