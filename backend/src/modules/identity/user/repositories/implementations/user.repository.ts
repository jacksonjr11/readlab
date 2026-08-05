import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository as IUserRepository } from '../representations/user.repository';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findByID(id: string): Promise<UserEntity> {
    const result = await this.repository.findOneBy({ id });
    return result as UserEntity;
  }
}
