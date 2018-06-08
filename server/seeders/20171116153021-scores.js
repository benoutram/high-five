'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Scores', [
      {
        id: 1,
        user: 1,
        language: 2,
        score: 0,
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      },
      {
        id: 2,
        user: 2,
        language: 2,
        score: 0,
        createdAt: '2017-11-13 13:29:10',
        updatedAt: '2017-11-13 13:29:10'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Scores', null, {})
  }
}
