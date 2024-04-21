const { Sequelize, DataTypes } = require('sequelize')

class Diary extends Sequelize.Model {
    static initModel(sequelize) {
        Diary.initModel({
            diary_no: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            content: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            image_path: {
                type: DataTypes.STRING(500),
            },
            icon_path: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            date : {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.sequelize.literal('CURRENT_TIMESTAMP')
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Diary',
            tableName: 'diary',
            
        })
    }
}