import { config } from 'dotenv';
config();

export interface JwtPayload {
  sub: string;
  username: string;
}

export const jwtConfig = {
  secret: process.env.JWT_SECRET ?? 'default_secret',
  signOptions: {
    expiresIn: '60s',
  },
} as const;
