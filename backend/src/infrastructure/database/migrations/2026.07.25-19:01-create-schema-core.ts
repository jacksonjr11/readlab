import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaCore implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE SCHEMA IF NOT EXISTS core AUTHORIZATION postgres;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP SCHEMA core
    `);
  }
}
