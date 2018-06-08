'use strict'

module.exports = (sequelize, DataTypes) => {
  var Language = sequelize.define('Language', {
    name: {
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

  return Language
}
