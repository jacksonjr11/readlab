import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../user/repositories/representations/user.repository';
import { SignInDTO } from '../dto/auth/signin.dto';
import { EncryptService } from 'src/infrastructure/lib/encrypt.service';
import { JwtConfig, JwtPayload } from '../config/jwt/jwt.config';
import { JwtService } from '@nestjs/jwt';

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(input: SignInDTO) {
    const user = await this.userRepository.findByUsername(input.username);
    if (!user) {
      throw new NotFoundException();
    }

    const isMatch = await this.encryptService.compare(
      input.password,
      user.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { sub: user.id, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(
      payload,
      JwtConfig.refreshOptions,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  signOut() {}
}
