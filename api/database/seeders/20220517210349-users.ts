import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [{
      username: 'Tester',
      password: 'Tester_password',
    }], {});
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', { username: 'Tester' }, {});
  },
};
