import { QueryInterface } from 'sequelize/types';

module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable('tasks',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false,
        },
      },
    );
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('tasks');
  },
};
