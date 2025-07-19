import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    const isHttpExceptions = exception instanceof HttpException;

    const status = isHttpExceptions
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const defaultMessage = 'Internal server error';
    const defaultError = 'Internal server error';

    let messages: string[] = [defaultMessage];
    let errorName = defaultError;

    if (isHttpExceptions) {
      const responseData = exception.getResponse();

      if (typeof responseData === 'string') {
        messages = [responseData];
      }

      if (typeof responseData === 'object' && responseData !== null) {
        const { message, error } = responseData as Record<string, any>;

        if (Array.isArray(message)) {
          messages = message as string[];
        } else if (typeof message === 'string') {
          messages = [message];
        }

        if (typeof error === 'string') {
          errorName = error;
        }
      }
    }

    return response.status(status).json({
      message: messages,
      error: errorName,
      statusCode: status,
    });
  }
}
