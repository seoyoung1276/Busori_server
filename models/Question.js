const { Sequelize, DataTypes } = require('sequelize');

class Question extends Sequelize.Model {
    static initModel (sequelize) {
        Question.init ({
            question_no : {
             autoIncrement: true,
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
            },
            content : {
                type: DataTypes.STRING(500),
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            paranoid: false,
            modelName: 'Question',
            tableName: 'question',
            charset: 'utf8',
        })
    }
    static associate(db) {}
}

module.exports = Question;