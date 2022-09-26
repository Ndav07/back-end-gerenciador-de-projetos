import { MigrationInterface, QueryRunner } from "typeorm"

export class RenameCollumInTeams1664198876732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("teams", "projetoId", "projectId");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("teams", "projectId", "projetoId");
    }

}
