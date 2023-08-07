'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      id_task: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed', 'not completed'),
        defaultValue: 'pending',
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM('work', 'personal', 'studies'),
        defaultValue: 'personal',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'task',
    }
  );
  return Task;
};
