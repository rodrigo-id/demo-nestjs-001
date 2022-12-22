import { Module } from '@nestjs/common';
import { RickandmortycharacterModule } from './rickandmortycharacter/rickandmortycharacter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RickandmortycharacterModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
