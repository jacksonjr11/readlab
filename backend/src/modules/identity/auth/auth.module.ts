import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtConfig } from './config/jwt/jwt.config';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JwtConfig.secret,
      signOptions: JwtConfig.signOptions,
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
