'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Languages', [
      {
        id: 1,
        name: 'English',
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      },
      {
        id: 2,
        name: 'French',
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      }
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Languages', null, {})
  }
}
