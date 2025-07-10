import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user/entities/user.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost', //colocar em variaveis de ambiente
          port: 5430,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          synchronize: process.env.DB_SYNCHRONIZE === '1', // Desativar DB Syncronize em produção
          autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === '1',
          // entities: [User],
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
