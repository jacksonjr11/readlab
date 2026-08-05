import { IsEmail, IsString } from 'class-validator';

export class PersonInputDTO {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;
}
