const express = require('express')
const auth = require('./auth')
const addFamily = require('./addFamily')

const router = express.Router();

router.use(auth)
router.use(addFamily)

module.exports = router;