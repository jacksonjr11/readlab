import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository as IUserRepository } from '../representations/user.repository';
import { UserEntity } from 'src/infrastructure/database/entities/user.entity';
import { UserInputDTO } from '../../dto/user/user.input';
import { UserFilterDTO } from '../../dto/user/user.filter';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findByFilter(filter: UserFilterDTO): Promise<UserEntity[]> {
    const result = await this.repository.findBy(filter);
    return result;
  }

  async findByID(id: string): Promise<UserEntity> {
    const result = await this.repository.findOneBy({ id });
    return result as UserEntity;
  }

  async save(input: UserInputDTO): Promise<UserEntity> {
    const result = await this.repository.save(input);
    return result;
  }

  async update(id: string, input: UserInputDTO): Promise<UserEntity> {
    const result = await this.repository.save(input);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
