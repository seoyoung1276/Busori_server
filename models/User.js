// models/users.js 파일
const { Sequelize, DataTypes} = require('sequelize');

class User extends Sequelize.Model {
  static initModel(sequelize) {
    User.init(
      {
        user_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        id: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
        },
        password: {
            type: DataTypes.STRING(24),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('아빠', '엄마', '아들', '딸'),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        invite_code: {
            type: DataTypes.STRING(6),
            allowNull: false,
            unique: true,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
        paranoid: false,
        charset: 'utf8mb4',
      }
    );
  }
  static associate(db){}
};

module.exports = User;
