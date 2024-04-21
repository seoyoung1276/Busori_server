const express = require('express')
const auth = require('./auth')
const addFamily = require('./addFamily')
const question = require('./Question')
const answer = require('./answer')
const memo = require('./memo')

const router = express.Router();

router.use('/auth', auth)
router.use('/addfamily', addFamily)
router.use('/question', question)
router.use('/answer', answer)
router.use('/memo', memo)

module.exports = router;