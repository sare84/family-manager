import { Injectable } from '@nestjs/common';

import { EncryptionException } from '../exceptions/bcrypt.exception';

@Injectable()
export class PasswordEncrypterService { 
  async hash(password: String): Promise<string> {
    const bcrypt = require('bcryptjs');
    console.log(password, bcrypt);
    try {
      return await bcrypt.hash(password, 8);
    } catch (error) {
      throw new EncryptionException(error);
    }
  }
  
  async verify(password: String, encrypted: String): Promise<boolean> {
    const bcrypt = require('bcryptjs');
    try {
      return await bcrypt.compare(password, encrypted);
    } catch (error) {
      throw new EncryptionException(error);
    }
  }
}