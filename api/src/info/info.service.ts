import { Injectable } from '@nestjs/common';
import { Info } from './interfaces/info.interface';

@Injectable()
export class InfoService {
  private readonly version: Info =  {
    running: true,
    action: 'Info',
    version: '1.0.0'
  };

  get() : Info {
    return this.version;
  }; 
}
