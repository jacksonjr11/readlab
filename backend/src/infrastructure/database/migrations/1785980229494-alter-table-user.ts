import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1785980229494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE user
        ADD COLUMN IF NOT EXISTS username TEXT NOT NULL UNIQUE,
        ADD COLUMN IF NOT EXISTS active BOOLEAN NOT NULL DEFAULT TRUE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE core.user
        DROP COLUMN IF EXISTS username,
        DROP COLUMN IF EXISTS active;
    `);
  }
}
