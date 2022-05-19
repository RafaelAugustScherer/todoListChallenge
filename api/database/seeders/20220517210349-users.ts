import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [{
      username: 'Tester',
      password: '$2a$10$EizX73GJO1Sv5L/bPY0I2eMEuj0wftoOLSCdJAelJZNGtpxWvz0qO', // Tester_password
    }], {});
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', { username: 'Tester' }, {});
  },
};
