import { Controller, Request, Post, UseGuards, Get, Res, HttpException, HttpStatus, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() user) {
    const { username, password } = user;
    const result = await this.authService.validateUser(username, password);
    if (result === null) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    } else {
      return this.authService.login(user);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findOne(req.user);
  }
}