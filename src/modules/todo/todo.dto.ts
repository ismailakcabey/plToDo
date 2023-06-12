import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsNumber,
    IsBoolean,
} from 'class-validator'
export class ToDoDto {

      @IsString()
      title?: string
      
      @IsString()
      description?: string

      @IsBoolean()
      isActive?: boolean

      @IsNumber()
      user_id?: number

}