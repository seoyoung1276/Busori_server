const express = require('express')
const Question = require('../models/Question')
const schedule = require('node-schedule');
const router = express.Router()
let question_num = 1;

// 오늘의 질문 불러오기
router.get('/show', async (req, res) => {
    try{
        changeQuestion;
        const question_no = question_num;
        const todayQuestion = await Question.findOne({ where : {question_no} })
        return res.status(200).json(todayQuestion);
    }catch (error) {
        console.log(error)
        return res.status(500).json({ error : 'show question error'})
    }
        
})

const changeQuestion = schedule.scheduleJob('* * 00 * * *', function() {
    question_num++;
})

module.exports = router;