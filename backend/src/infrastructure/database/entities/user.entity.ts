import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { GeneralEntity } from '../types/entity-general';
import { PersonEntity } from './person.entity';

@Entity({ schema: 'core', name: 'user' })
export class UserEntity extends GeneralEntity {
  @Column()
  login!: string;

  @Column()
  password!: string;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person!: PersonEntity;
}
