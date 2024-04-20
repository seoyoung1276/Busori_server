const { Sequelize, DataTypes } = require('sequelize')

class Answer extends Sequelize.Model {
    static initModel(sequelize) {
        Answer.init ({
            answer_no : {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            content : {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            Date : {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            },
            question_no : {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'question',
                    key: 'question_no'
                }
            },
            user_no : {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_no'
                }
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Answer',
            tableName : 'answer',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    } static associate(db) {}
}

module.exports = Answer;