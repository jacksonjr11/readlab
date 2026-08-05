import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('person')
export class PersonController {
  constructor(private readonly service: UserService) {}
}
