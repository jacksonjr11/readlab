import { JwtModuleOptions } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

type JwtExpiresIn = NonNullable<JwtModuleOptions['signOptions']>['expiresIn'];

export interface JwtPayload {
  sub: string;
  username: string;
}

function getJwtExpiresIn(value: string | undefined): JwtExpiresIn {
  return value as JwtExpiresIn;
}

export const JwtConfig = {
  secret: process.env.JWT_SECRET,
  signOptions: {
    expiresIn: getJwtExpiresIn(process.env.JWT_EXPIRES_IN),
  },
  refreshOptions: {
    expiresIn: getJwtExpiresIn(process.env.JWT_REFRESH_EXPIRES_IN),
  },
} satisfies JwtModuleOptions & {
  refreshOptions: JwtModuleOptions['signOptions'];
};
