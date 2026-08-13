import { Controller } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDTO } from '../dto/auth/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async signIn(input: SignInDTO): Promise<void> {
    await this.authService.signIn(input);
  }
}
