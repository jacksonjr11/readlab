import { UserEntity } from 'src/infrastructure/database/entities/user.entity';

export abstract class UserRepository {
  abstract findByID: (id: string) => Promise<UserEntity>;
}
