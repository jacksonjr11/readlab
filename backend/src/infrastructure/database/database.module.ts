import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connection } from './connection';

@Module({
  imports: [TypeOrmModule.forRoot(connection)],
})
export class DatabaseModule {}
