import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCollumFKOfTeamsToProjects1664369883145 implements MigrationInterface {
    name = 'AlterCollumFKOfTeamsToProjects1664369883145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_9f03fd857a6f5401abaa1f1ae71"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "REL_95dac3bc63495555bcbb94a917"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP COLUMN "projectId"`);
        await queryRunner.query(`ALTER TABLE "projects" ADD "teamId" uuid`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "UQ_2f789e58a882d8dd5b936c747c2" UNIQUE ("teamId")`);
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:14:49.517822'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:14:49.517822'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:14:49.517822'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:14:49.517822'`);
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:14:49.517822'`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "UQ_2f789e58a882d8dd5b936c747c2"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD "projectId" uuid`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "REL_95dac3bc63495555bcbb94a917" UNIQUE ("projectId")`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_9f03fd857a6f5401abaa1f1ae71" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
