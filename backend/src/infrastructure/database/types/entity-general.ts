import { Column, PrimaryColumn } from 'typeorm';

export class GeneralEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
