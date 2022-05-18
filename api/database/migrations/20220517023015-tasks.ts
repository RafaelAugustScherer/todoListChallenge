import { QueryInterface } from 'sequelize/types';

module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable('tasks',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
    );
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('tasks');
  },
};
