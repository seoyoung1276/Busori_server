var DataTypes = require('sequelize').DataTypes;

var _users = require('./User')

function initModel(sequelize) {
    var User = _users(sequelize, DataTypes);

    return {
        User,
    }
}

module.exports = initModel
module.exports.initModel = initModel;
module.exports.default = initModel;