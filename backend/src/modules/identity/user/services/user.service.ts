import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/interfaces/user.repository';
import { UserModel } from '../dto/user/user.model';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  public async findByID(id: string): Promise<UserModel> {
    const entity = await this.repository.findByID(id);
    const response: UserModel = {
      id: entity.id,
      username: entity.username,
    };

    return response;
  }
}
