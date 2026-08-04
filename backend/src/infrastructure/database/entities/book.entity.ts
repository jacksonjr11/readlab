import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { GeneralEntity } from '../types/entity-general';
import { UserEntity } from './user.entity';

@Entity({ schema: 'core', name: 'book' })
export class BookEntity extends GeneralEntity {
  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  subject!: string;

  @Column()
  url!: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
}
