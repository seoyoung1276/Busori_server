const { Sequelize, DataTypes } = require('sequelize');

class Family extends Sequelize.Model {
    static initModel(sequelize) {
        Family.init({
           family_no : {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
           },
           follower_no : {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'user_no'
            }
           },
           following_no : {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'user_no'
            }
           },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            paranoid: false,
            modelName: 'Family',
            tableName: 'family',
            charset: 'utf8',
        })
    }
    static associate(db){}
}

module.exports = Family;