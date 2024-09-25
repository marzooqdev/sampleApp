import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class VerticalEntities1727181567469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Client table
        await queryRunner.createTable(
          new Table({
            name: 'client',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'age',
                type: 'int',
              },
              {
                name: 'status',
                type: 'varchar',
              },
            ],
          }),
          true,
        );
    
        // Create Business table
        await queryRunner.createTable(
          new Table({
            name: 'business',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: 'companyName',
                type: 'varchar',
              },
              {
                name: 'role',
                type: 'varchar',
              },
              {
                name: 'startedAt',
                type: 'timestamp',
              },
              {
                name: 'clientId', // Foreign key column
                type: 'int',
              },
            ],
          }),
          true,
        );
    
        // Create Accounting table
        await queryRunner.createTable(
          new Table({
            name: 'accounting',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: 'clientId',
                type: 'int',
              },
              {
                name: 'amount',
                type: 'decimal',
                precision: 10,
                scale: 2,
              },
              {
                name: 'transactionDate',
                type: 'timestamp',
              },
            ],
          }),
          true,
        );
    
        // Create Healthcare table
        await queryRunner.createTable(
          new Table({
            name: 'healthcare',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
              },
              {
                name: 'patientId',
                type: 'int',
              },
              {
                name: 'treatment',
                type: 'varchar',
              },
              {
                name: 'treatmentDate',
                type: 'timestamp',
              },
            ],
          }),
          true,
        );
    
        // Create foreign keys
        await queryRunner.createForeignKey(
          'business',
          new TableForeignKey({
            columnNames: ['clientId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'client',
            onDelete: 'CASCADE',
          }),
        );
    
        await queryRunner.createForeignKey(
          'accounting',
          new TableForeignKey({
            columnNames: ['clientId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'client',
            onDelete: 'CASCADE',
          }),
        );
    
        await queryRunner.createForeignKey(
          'healthcare',
          new TableForeignKey({
            columnNames: ['patientId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'client',
            onDelete: 'CASCADE',
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign keys first
        await queryRunner.dropForeignKey('business', 'FK_business_client');
        await queryRunner.dropForeignKey('accounting', 'FK_accounting_client');
        await queryRunner.dropForeignKey('healthcare', 'FK_healthcare_client');
    
        // Drop tables
        await queryRunner.dropTable('client');
        await queryRunner.dropTable('business');
        await queryRunner.dropTable('accounting');
        await queryRunner.dropTable('healthcare');
      }
    }
