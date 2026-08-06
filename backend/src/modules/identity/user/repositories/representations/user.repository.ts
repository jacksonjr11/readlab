import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { UserInputDTO } from '../../dto/user/user.input';
import { UserFilterDTO } from '../../dto/user/user.filter';

export abstract class UserRepository {
  abstract findByFilter: (filter: UserFilterDTO) => Promise<UserEntity[]>;
  abstract findByID: (id: string) => Promise<UserEntity>;
  abstract save: (input: UserInputDTO) => Promise<UserEntity>;
  abstract update: (id: string, input: UserInputDTO) => Promise<UserEntity>;
  abstract delete: (id: string) => Promise<void>;
}
