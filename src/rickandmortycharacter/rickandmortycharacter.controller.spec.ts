import { Test, TestingModule } from '@nestjs/testing';
import { RickandmortycharacterController } from './rickandmortycharacter.controller';

describe('RickandmortycharacterController', () => {
  let controller: RickandmortycharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RickandmortycharacterController],
    }).compile();

    controller = module.get<RickandmortycharacterController>(RickandmortycharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
