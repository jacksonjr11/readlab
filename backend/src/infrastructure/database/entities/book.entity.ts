import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'core', name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  category!: string;
}
