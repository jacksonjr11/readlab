import { IsString } from 'class-validator';

export class UserInputDTO {
  @IsString()
  username!: string;

  @IsString()
  login!: string;

  @IsString()
  password!: string;
}
