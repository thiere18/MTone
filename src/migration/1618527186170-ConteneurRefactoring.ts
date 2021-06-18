import {MigrationInterface, QueryRunner} from "typeorm";

export class ConteneurRefactoring1618527186170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE conteneur ADD IDs varchar(255)")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE conteneur ADD IDs varchar(255)")
    }

}
