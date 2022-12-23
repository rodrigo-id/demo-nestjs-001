import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

async function bootstrap() {
  //dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  const configService = app.get(ConfigService);
  const port: number = configService.get('port') || 3000;
  const clientCredential = configService.get('clientCredentials');
  const yamlHttpData = configService.get('http');
  const yamlDbData = configService.get('db');
  
  console.log(`app running at port ${port}`);
  console.log(`info of config object ${JSON.stringify(clientCredential)}`);
  console.log(`info of config object ${JSON.stringify(yamlHttpData)}`);
  console.log(`info of config object ${JSON.stringify(yamlDbData)}`);
  //console.log(`app running at port ${process.env.CASA}`);
  console.log(`app running at port ${configService.get('CASA')}`);
  await app.listen(port);
}
bootstrap();
