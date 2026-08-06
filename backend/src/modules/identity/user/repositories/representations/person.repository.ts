import { PersonEntity } from 'src/infrastructure/database/entities/person.entity';
import { PersonInputDTO } from '../../dto/person/person.input';
import { PersonFilterDTO } from '../../dto/person/person.filter';

export abstract class PersonRepository {
  abstract findByFilter: (filter: PersonFilterDTO) => Promise<PersonEntity[]>;
  abstract findByID: (id: string) => Promise<PersonEntity>;
  abstract save: (input: PersonInputDTO) => Promise<PersonEntity>;
  abstract update: (id: string, input: PersonInputDTO) => Promise<PersonEntity>;
  abstract delete: (id: string) => Promise<void>;
}
