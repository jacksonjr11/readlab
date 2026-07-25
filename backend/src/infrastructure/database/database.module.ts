import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnection } from './connection';

@Module({
  imports: [TypeOrmModule.forRoot(PostgresConnection)],
})
export class DatabaseModule {}
