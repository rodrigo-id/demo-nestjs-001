import { Catch, Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { RickandmortycharacterService } from './rickandmortycharacter.service';
import { Character } from './models/Character';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('rickandmortycharacter')
//@UseFilters(HttpExceptionFilter)
export class RickandmortycharacterController {
  constructor(
    private readonly rickAndMortyCharacterService: RickandmortycharacterService,
  ) {}

  @Get(':id')
  //@UseFilters(HttpExceptionFilter)
  getCharacter(@Param('id', ParseIntPipe) id: number): Promise<Character> {
    const response = this.rickAndMortyCharacterService.getCharacter(id);
    return response;
  }

  @Get()
  //@UseFilters(HttpExceptionFilter)
  getAllCharacter(): Promise<Character[]> {
    return this.rickAndMortyCharacterService.getAllCharacter();
  }
}
