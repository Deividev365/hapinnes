import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602670977302 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAÇÕES, CRIAR, EDITAR, DELETAR    
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'Latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },

          {
            name: 'Longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },

          {
            name: 'about',
            type: 'text',
          },

          {
            name: 'instructions',
            type: 'text',
          },

          {
            name: 'opening_hours',
            type: 'varchar',
          },

          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          },

        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NA 'UP',

    await queryRunner.dropTable('orphanages');
  
  }
}
