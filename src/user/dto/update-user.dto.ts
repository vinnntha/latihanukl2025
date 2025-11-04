import { IsEmail, IsOptional, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
      @IsNotEmpty()
    name?: string;

    @IsEmail()
    email?: string;

    @IsNotEmpty()
    password?: string;

    @IsOptional()
    @IsNotEmpty()
    role?: string;
}
