import { Column, Entity } from 'typeorm';
import { GeneralEntity } from '../types/entity-general';

@Entity({ schema: 'core', name: 'person' })
export class PersonEntity extends GeneralEntity {
  @Column()
  name!: string;

  @Column()
  email!: string;
}
