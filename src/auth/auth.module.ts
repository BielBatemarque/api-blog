import { InternalServerErrorException, Module } from '@nestjs/common';
import { AuthControler } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { CommonMudule } from 'src/common/common.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    CommonMudule,
    JwtModule.registerAsync({
      useFactory: () => {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
          throw new InternalServerErrorException('JWT_SCRET not found in env');
        }
        return {
          secret,
          signOptions: { expiresIn: process.env.JWT_EXPIRATION || '1d' },
        };
      },
    }),
  ],
  controllers: [AuthControler],
  providers: [AuthService, JwtStrategy],
  exports: [],
})
export class AuthModule {}
