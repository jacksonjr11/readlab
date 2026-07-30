import { IsDate, IsString } from 'class-validator';

export class AnnotationInputDTO {
  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsString()
  bookID!: string;

  @IsDate()
  createdAt!: Date;
}
