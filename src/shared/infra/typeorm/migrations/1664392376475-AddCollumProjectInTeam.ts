import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCollumProjectInTeam1664392376475 implements MigrationInterface {
    name = 'AddCollumProjectInTeam1664392376475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
    }

}
