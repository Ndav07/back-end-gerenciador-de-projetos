import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTaskContributor1664194342076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("tasks", "cotributorId", "contributorId");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("tasks", "contributorId", "cotributorId");
    }

}
