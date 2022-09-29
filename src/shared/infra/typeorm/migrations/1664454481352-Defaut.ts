import { MigrationInterface, QueryRunner } from "typeorm";

export class Defaut1664454481352 implements MigrationInterface {
    name = 'Defaut1664454481352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contributors" ("id" uuid NOT NULL, "name" character varying NOT NULL, "office" character varying NOT NULL, "avatar" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "teamId" uuid, CONSTRAINT "PK_c94ff4e6bca235dc30625c92c90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "projectId" uuid, "contributorId" uuid, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "teamId" uuid, CONSTRAINT "REL_2f789e58a882d8dd5b936c747c" UNIQUE ("teamId"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "contributors" ADD CONSTRAINT "FK_c48c46b31b489927c065ffabe91" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_1a2c88017330920673b08d9871b" FOREIGN KEY ("contributorId") REFERENCES "contributors"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_2f789e58a882d8dd5b936c747c2"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_1a2c88017330920673b08d9871b"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956"`);
        await queryRunner.query(`ALTER TABLE "contributors" DROP CONSTRAINT "FK_c48c46b31b489927c065ffabe91"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-09-28 12:58:37.649999'`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "contributors"`);
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}
