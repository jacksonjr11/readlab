import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/infrastructure/database/entities/person.entity';
import { PersonRepository as IPersonRepository } from '../representations/person.repository';

export class PersonRepository implements IPersonRepository {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly repository: Repository<PersonEntity>,
  ) {}

  async findByID(id: string): Promise<PersonEntity> {
    const result = await this.repository.findOneBy({ id });
    return result as PersonEntity;
  }
}
