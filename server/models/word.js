'use strict'

module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('Word', {
    label: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })

  return Word
}
