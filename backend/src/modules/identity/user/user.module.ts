import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/implementations/user.repository';
import { UserRepository as IUserRepository } from './repositories/representations/user.repository';
import { PersonRepository } from './repositories/implementations/person.repository';
import { PersonRepository as IPersonRepository } from './repositories/representations/person.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IPersonRepository,
      useClass: PersonRepository,
    },
  ],
})
export class UserModule {}
