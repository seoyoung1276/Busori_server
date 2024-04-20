
const Sequelize = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

const User = require('./User')
const Family = require('./Family')
const Question = require('./Question')


const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Family = Family;
db.Question = Question;

User.initModel(sequelize);
Family.initModel(sequelize);
Question.initModel(sequelize);

User.associate(db);
Family.associate(db);
Question.associate(db);



module.exports = db;
