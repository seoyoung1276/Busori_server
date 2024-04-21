
const Sequelize = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

const User = require('./User')
const Family = require('./Family')
const Question = require('./Question')
const Answer = require('./Answer')
const Memo = require('./Memo')


const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Family = Family;
db.Question = Question;
db.Answer = Answer;
db.Memo = Memo;

User.initModel(sequelize);
Family.initModel(sequelize);
Question.initModel(sequelize);
Answer.initModel(sequelize);
Memo.initModel(sequelize);

User.associate(db);
Family.associate(db);
Question.associate(db);
Answer.associate(db);
Memo.associate(db);


module.exports = db;
