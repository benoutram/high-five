'use strict'

module.exports = (sequelize, DataTypes) => {
  var Score = sequelize.define('Score', {
    user: DataTypes.INTEGER,
    language: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Score
}
