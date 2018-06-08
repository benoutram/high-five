'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'john@doe.com',
        name: 'John Doe',
        password: '$2a$08$80PX032NeKybO6PpFltF3eC8r1MDHx3nnb70eDLZmrKfAbyPSd4Qa',
        language: 1,
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      },
      {
        email: 'steve@smith.com',
        name: 'Steve Smith',
        password: '$2a$08$80PX032NeKybO6PpFltF3eC8r1MDHx3nnb70eDLZmrKfAbyPSd4Qa',
        language: 1,
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
