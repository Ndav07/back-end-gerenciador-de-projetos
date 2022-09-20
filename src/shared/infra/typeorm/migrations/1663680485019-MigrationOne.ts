import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationOne1663680485019 implements MigrationInterface {
    name = 'MigrationOne1663680485019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "projectId" uuid, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "projetoId" uuid, CONSTRAINT "REL_95dac3bc63495555bcbb94a917" UNIQUE ("projetoId"), CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contributors" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "teamId" uuid, CONSTRAINT "PK_c94ff4e6bca235dc30625c92c90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contributorstasks" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "contributorId" uuid, "taskId" uuid, CONSTRAINT "REL_7132a777934fcc6b60378d625a" UNIQUE ("contributorId"), CONSTRAINT "REL_27270ba3925ea6d2bd09e00e0e" UNIQUE ("taskId"), CONSTRAINT "PK_4f6266f601137325b4a8aaf7c0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP DEFAULT 'now()', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_95dac3bc63495555bcbb94a917c" FOREIGN KEY ("projetoId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contributors" ADD CONSTRAINT "FK_c48c46b31b489927c065ffabe91" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contributorstasks" ADD CONSTRAINT "FK_7132a777934fcc6b60378d625a8" FOREIGN KEY ("contributorId") REFERENCES "contributors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contributorstasks" ADD CONSTRAINT "FK_27270ba3925ea6d2bd09e00e0ea" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contributorstasks" DROP CONSTRAINT "FK_27270ba3925ea6d2bd09e00e0ea"`);
        await queryRunner.query(`ALTER TABLE "contributorstasks" DROP CONSTRAINT "FK_7132a777934fcc6b60378d625a8"`);
        await queryRunner.query(`ALTER TABLE "contributors" DROP CONSTRAINT "FK_c48c46b31b489927c065ffabe91"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_95dac3bc63495555bcbb94a917c"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contributorstasks"`);
        await queryRunner.query(`DROP TABLE "contributors"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
