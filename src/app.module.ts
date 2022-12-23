import { Module } from '@nestjs/common';
import { RickandmortycharacterModule } from './rickandmortycharacter/rickandmortycharacter.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import configurationYaml from './config/configuration-yaml';

@Module({
  imports: [
    RickandmortycharacterModule,
    ConfigModule.forRoot({ load: [configuration, configurationYaml] }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
