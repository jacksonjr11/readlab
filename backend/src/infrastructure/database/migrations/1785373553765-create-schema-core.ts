import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaCore1785373553765 implements MigrationInterface {
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
