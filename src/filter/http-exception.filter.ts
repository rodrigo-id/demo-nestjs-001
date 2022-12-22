import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException, InternalServerErrorException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCodes = exception.getStatus();
    const message = exception.message || null;

    const body = {
      statusCodes,
      message,
      timestamp: new Date().toISOString(),
      endpoint: request.url,
    };

    this.logger.warn(`${statusCodes} ${message}`);

    response.status(statusCodes).json(body);
  }
}
