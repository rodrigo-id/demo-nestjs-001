import { Module } from '@nestjs/common';
import { RickandmortycharacterController } from './rickandmortycharacter.controller';
import { RickandmortycharacterService } from './rickandmortycharacter.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RickandmortycharacterController],
  providers: [RickandmortycharacterService],
})
export class RickandmortycharacterModule {}
