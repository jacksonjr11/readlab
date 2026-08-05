import { Injectable } from '@nestjs/common';
import { PersonModel } from '../dto/person/person.model';
import { PersonRepository } from '../repositories/representations/person.repository';

@Injectable()
export class PersonService {
  constructor(private readonly repository: PersonRepository) {}

  public async findByID(id: string): Promise<PersonModel> {
    const entity = await this.repository.findByID(id);
    const response: PersonModel = {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    };

    return response;
  }
}
