const express = require('express')
const Answer = require('../models/Answer')
const User = require('../models/User')
const Family = require('../models/Family')
const { Op } = require('sequelize');
const router = express.Router()

// 답변 작성
router.post('/postanswer/:questionid', async (req, res) => {
    try {
        const currentUser = req.session.user;
        const questionId = req.params.questionid
        const { content } = req.body

        const postAnswer = await Answer.create({
            content : content,
            question_no : questionId,
            user_no : currentUser.user_no
        })
        return res.status(201).json(postAnswer)

    }catch(error) {
        console.log(error)
        return res.status(500).json({ error : 'post answer error'})
    }
})

// 질문에 대한 내 답변 불러오기
router.get('/getanswer/:questionid', async (req, res) => {
    try{
        const currentUser = req.session.user
        const question_no = req.params.questionid
        const getAnswer = await Answer.findAll({ 
            where: {
                question_no: question_no,
                user_no : currentUser.user_no
            }
        })
        return res.status(201).json(getAnswer)

    }catch(error) {
        console.log(error)
        return res.status(500).json({ error : 'get answer error'})
    }
})


// 질문에 대한 친구의 답변 불러오기
router.get('/getfriendanswer/:questionNo', async (req, res) => {
    try{
        const question_no = req.params.questionNo
        const currentUser = req.session.user

        const myFriend = await Family.findAll({
            where: {
                follower_no: currentUser.user_no
            }
        });
        console.log(myFriend)
        const friendUserNo = myFriend.map(friend => friend.following_no)
        console.log(friendUserNo)

        const friendAnswer = await Answer.findAll({
            where: {
               question_no : question_no,
                user_no: {[Op.in] : friendUserNo}
            }
        })
        return res.status(200).json({friendAnswer})


    }catch(error){
        console.log(error)
        return res.status(500).json({error : 'get friend answer error'})
    }
})

module.exports = router;