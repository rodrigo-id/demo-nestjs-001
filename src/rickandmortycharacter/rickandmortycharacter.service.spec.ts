import { Test, TestingModule } from '@nestjs/testing';
import { RickandmortycharacterService } from './rickandmortycharacter.service';

describe('RickandmortycharacterService', () => {
  let service: RickandmortycharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RickandmortycharacterService],
    }).compile();

    service = module.get<RickandmortycharacterService>(
      RickandmortycharacterService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
