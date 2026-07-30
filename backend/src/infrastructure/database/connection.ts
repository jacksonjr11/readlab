import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const PostgresConnection: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'root',
  database: process.env.POSTGRES_DB ?? 'readlab',
  entities: [__dirname + '/entities/*{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  migrationsRun: true,
};
