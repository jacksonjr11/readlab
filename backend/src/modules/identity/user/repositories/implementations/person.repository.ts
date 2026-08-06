import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/infrastructure/database/entities/person.entity';
import { PersonRepository as IPersonRepository } from '../representations/person.repository';
import { PersonInputDTO } from '../../dto/person/person.input';
import { PersonFilterDTO } from '../../dto/person/person.filter';

export class PersonRepository implements IPersonRepository {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly repository: Repository<PersonEntity>,
  ) {}

  async findByFilter(filter: PersonFilterDTO): Promise<PersonEntity[]> {
    const result = await this.repository.findBy(filter);
    return result;
  }

  async findByID(id: string): Promise<PersonEntity> {
    const result = await this.repository.findOneBy({ id });
    return result as PersonEntity;
  }

  async save(input: PersonInputDTO): Promise<PersonEntity> {
    const result = await this.repository.save(input);
    return result;
  }

  async update(id: string, input: PersonInputDTO): Promise<PersonEntity> {
    const result = await this.repository.save(input);
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
