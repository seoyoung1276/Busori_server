const express = require('express')
const auth = require('./auth')
const addFamily = require('./addFamily')
const question = require('./Question')
const answer = require('./answer')

const router = express.Router();

router.use(auth)
router.use(addFamily)
router.use(question)
router.use(answer)

module.exports = router;