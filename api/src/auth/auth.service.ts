import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { PasswordEncrypterService } from '../utils/password-encrypter.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly passwordEncrypterService: PasswordEncrypterService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(username);
    if (user === null) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    
    const pwdCorrect = await this.passwordEncrypterService.verify(pass, user.password);
    
    if (user && pwdCorrect) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException('Credentials are wrong', HttpStatus.UNAUTHORIZED);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}