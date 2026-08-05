import { PersonEntity } from 'src/infrastructure/database/entities/person.entity';

export abstract class PersonRepository {
  abstract findByID: (id: string) => Promise<PersonEntity>;
}
