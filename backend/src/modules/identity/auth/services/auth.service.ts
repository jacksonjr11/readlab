import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../user/repositories/representations/user.repository';
import { SignInDTO } from '../dto/auth/signin.dto';

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signIn(input: SignInDTO) {
    const user = await this.userRepository.findByUsername(input.username);
    if (!user) {
      throw new NotFoundException();
    }

    if (user.password !== input.password) {
      throw new UnauthorizedException();
    }
  }

  signOut() {}
}
