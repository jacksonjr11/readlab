import { Column, Entity } from 'typeorm';
import { GeneralEntity } from '../types/entity-general';

@Entity({ schema: 'core', name: 'user' })
export class UserEntity extends GeneralEntity {
  @Column()
  login!: string;

  @Column()
  password!: string;
}
