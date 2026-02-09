import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() body: RegisterUserDto) {
    return this.userService.register(body);
  }

  @ApiBearerAuth('bearer') // 👈 บอก Swagger ว่าต้องใช้ Bearer
  @UseGuards(AuthGuard('jwt')) // 👈 ปิดด้วย JWT
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
