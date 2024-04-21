const {Sequelize, DataTypes } = require('sequelize')

class Memo extends Sequelize.Model {
    static initModel(sequelize) {
        Memo.init(
            {
            memo_no:{
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            content : {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            Date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue : Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            },
            icon_path : {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            user_no : {
                type: DataTypes.INTEGER,
                allowsNull : false,
                references: {
                    model: 'users',
                    key: 'user_no'
                }
            }

        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Memo',
            tableName : 'memo',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    } static associate(db) {}
}

module.exports = Memo;