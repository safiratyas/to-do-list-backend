'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
  }
  Lists.init({
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};