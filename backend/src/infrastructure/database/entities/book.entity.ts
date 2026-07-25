import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  category!: string;
}
