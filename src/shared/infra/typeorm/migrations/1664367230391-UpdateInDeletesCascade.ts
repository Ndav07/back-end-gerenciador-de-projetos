import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateInDeletesCascade1664367230391 implements MigrationInterface {
    name = 'UpdateInDeletesCascade1664367230391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_1a2c88017330920673b08d9871b"`);
        await queryRunner.query(`ALTER TABLE "contributors" DROP CONSTRAINT "FK_c48c46b31b489927c065ffabe91"`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_1a2c88017330920673b08d9871b" FOREIGN KEY ("contributorId") REFERENCES "contributors"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contributors" ADD CONSTRAINT "FK_c48c46b31b489927c065ffabe91" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contributors" DROP CONSTRAINT "FK_c48c46b31b489927c065ffabe91"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_1a2c88017330920673b08d9871b"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-09-23 11:38:45.02688'`);
        await queryRunner.query(`ALTER TABLE "contributors" ALTER COLUMN "created_at" SET DEFAULT '2022-09-23 11:38:45.02688'`);
        await queryRunner.query(`ALTER TABLE "teams" ALTER COLUMN "created_at" SET DEFAULT '2022-09-23 11:38:45.02688'`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT '2022-09-23 11:38:45.02688'`);
        await queryRunner.query(`ALTER TABLE "tasks" ALTER COLUMN "created_at" SET DEFAULT '2022-09-23 11:38:45.02688'`);
        await queryRunner.query(`ALTER TABLE "contributors" ADD CONSTRAINT "FK_c48c46b31b489927c065ffabe91" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_1a2c88017330920673b08d9871b" FOREIGN KEY ("contributorId") REFERENCES "contributors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_e08fca67ca8966e6b9914bf2956" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
