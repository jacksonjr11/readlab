import { Injectable } from '@nestjs/common';
import { PersonModel } from '../dto/person/person.model';
import { PersonRepository } from '../repositories/representations/person.repository';
import { PersonInputDTO } from '../dto/person/person.input';
import { PersonFilterDTO } from '../dto/person/person.filter';

@Injectable()
export class PersonService {
  constructor(private readonly repository: PersonRepository) {}

  public async findByFilter(filter: PersonFilterDTO): Promise<PersonModel[]> {
    return await this.repository.findByFilter(filter);
  }

  public async findByID(id: string): Promise<PersonModel> {
    const entity = await this.repository.findByID(id);
    const response: PersonModel = {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    };

    return response;
  }

  public async save(input: PersonInputDTO): Promise<PersonModel> {
    const entity = await this.repository.save(input);
    const response: PersonModel = {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    };

    return response;
  }

  public async update(id: string, input: PersonInputDTO): Promise<PersonModel> {
    const entity = await this.repository.update(id, input);
    const response: PersonModel = {
      id: entity.id,
      name: entity.name,
      email: entity.email,
    };

    return response;
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
