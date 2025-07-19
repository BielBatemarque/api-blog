import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { parseCorsWhiteList } from './common/utils/parse-cors-whitelist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  const corsWhitelist = parseCorsWhiteList(process.env.CORS_WHITE_LIST ?? '');

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (...args: any[]) => void,
    ) => {
      //Requisição sem origem ou que inclui uma origem conhecida
      //por corsWhitelist é permitida

      if (!origin || corsWhitelist.includes(origin)) {
        return callback(null, true);
      }

      //Requisição com origem que não conhecemos
      //negamos
      return callback(new Error('Not allowed by CORS'), false);
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.APP_PORT ?? 3002);
}
bootstrap();
