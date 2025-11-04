import { Controller, Put, Param, Body, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.findOne(Number(id));

  }
   @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
}
