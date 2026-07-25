import { IsDate, IsString } from 'class-validator';

export class BookInputDTO {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsDate()
  createdAt!: Date;
}
