import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('tasks', [
      {
        name: 'Lavar louça',
        status: 'pending',
        userId: 1,
      },
      {
        name: 'Estudar Conteúdo do dia 29.3',
        status: 'done',
        userId: 1,
      },
    ], {});
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('tasks', { userId: 1 }, {});
  },
};