import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableBook1785804187519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS core.book (
            id UUID PRIMARY KEY NOT NULL DEFAULT uuidv7(),
            user_id UUID NOT NULL REFERENCES core.user(id) ON DELETE CASCADE,
            title TEXT NOT NULL,
            description TEXT,
            author TEXT NOT NULL,
            subject TEXT NOT NULL,
            url TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW()
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS core.book;
    `);
  }
}
