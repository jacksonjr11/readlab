import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1785802882503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS user (
            id UUID PRIMARY KEY NOT NULL DEFAULT uuidv7(),
            person_id UUID NOT NULL REFERENCES person(id) ON DELETE CASCADE,
            login TEXT NOT NULL,
            password TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS user;
    `);
  }
}
