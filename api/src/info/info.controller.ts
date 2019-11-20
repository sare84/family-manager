import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { Info } from './interfaces/info.interface';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  
  @Get()
  info(): Info {
    return this.infoService.get();
  }
}
