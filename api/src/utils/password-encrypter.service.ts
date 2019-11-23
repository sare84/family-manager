import { Injectable } from '@nestjs/common';

import { EncryptionException } from '../exceptions/bcrypt.exception';

import * as bcrypt from 'bcryptjs'

@Injectable()
export class PasswordEncrypterService { 
  async hash(password: String): Promise<string> {
    try {
      return await bcrypt.hash(password, 8);
    } catch (error) {
      throw new EncryptionException(error);
    }
  }
  
  async verify(password: String, encrypted: String): Promise<boolean> {
    try {
      return await bcrypt.compare(password, encrypted);
    } catch (error) {
      throw new EncryptionException(error);
    }
  }
}