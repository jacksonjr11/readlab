import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialExtension implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
       CREATE EXTENSION IF NOT EXISTS pgcrypto;
       CREATE EXTENSION IF NOT EXISTS citext;
       CREATE EXTENSION IF NOT EXISTS pg_trgm;
       CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
       CREATE EXTENSION IF NOT EXISTS unaccent;
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
       CREATE EXTENSION IF NOT EXISTS pgcrypto;
       CREATE EXTENSION IF NOT EXISTS citext;
       CREATE EXTENSION IF NOT EXISTS pg_trgm;
       CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
       CREATE EXTENSION IF NOT EXISTS unaccent;
      `,
    );
  }
}
