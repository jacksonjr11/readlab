import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
  private readonly saltRounds: number = Number(process.env.SALT_ROUNDS);

  public async encrypt(text: string): Promise<string> {
    const hashed = await bcrypt.hash(text, this.saltRounds);
    return hashed;
  }

  public async compare(text: string, hashed: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(text, hashed);
    return isMatch;
  }
}
