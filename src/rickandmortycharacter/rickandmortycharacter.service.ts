import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import axios, { AxiosError } from 'axios';
import { Character } from './models/Character';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

export type RickAndMorty = {
  characters: string;
  locations: string;
  episodes: string;
};

@Injectable()
export class RickandmortycharacterService {
  constructor(private readonly httpService: HttpService) {}

  getAllCharacter = async (): Promise<Character[]> => {
    const request = this.httpService
      .get(`https://rickandmortyapi.com/api/character/`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      //.pipe(map((res) => res.data.results))
      .pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(
            `Error while consume the api`,
            HttpStatus.INTERNAL_SERVER_ERROR,
            { cause: error },
          );
          /*throw new InternalServerErrorException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              error: 'This is a custom message',
            },
            'description',
          );*/
        }),
      );

    const { data } = await firstValueFrom(request);

    return data.results;

    /*const response = await axios
      .get('https://rickandmortyapi.com/api/character/', {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      //.get('https://catfact.ninja/fact')
      .catch((error: AxiosError) => {
        throw `Error while consume the api - Error ${error}`;
      });

    return response?.data?.results;*/
  };

  getCharacter = async (characterId: number): Promise<Character> => {
    const request = this.httpService
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      //.get(`https://rickandmortyapi.com/api/character`)
      .pipe(
        catchError((error: AxiosError) => {
          throw new HttpException(
            `Character not found ${characterId}`,
            HttpStatus.NOT_FOUND,
            { cause: error },
          );
        }),
      );

    const { data } = await firstValueFrom(request);

    return data;
  };
}
