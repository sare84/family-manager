import { Test, TestingModule } from '@nestjs/testing';

import { InfoService } from './info.service';
import { InfoController } from './info.controller';

describe('InfoService', () => {
  let service: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoController],
      providers: [InfoService],
    }).compile();

    service = module.get<InfoService>(InfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return info object', () => {
    expect(service.get()).not.toBeNull();
  })

  it('should return version string', () => {
    expect(service.get().running).toBeTruthy();
  })
});
