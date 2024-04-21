const express = require('express')
const Memo = require('../models/Memo')
const Family = require('../models/Family')
const { Op } = require('sequelize')
const router = express.Router()

// 메모 작성
router.post('/post', async (req, res) => {
    try {
        const currentUser = req.session.user
        const { content, icon_path } = req.body;

        const newMemo = await Memo.create({
            content : content,
            date: new Date(),
            icon_path : icon_path,
            user_no : currentUser.user_no
        })
        return res.status(200).json(newMemo)

    }catch (error) {
        console.log(error)
        return res.status(500).json({ error : 'memo post error'})
    }

})

// 친구 메모 보기
router.get('/getfriendmemo', async(req, res) => {
    try{
        const currentUser = req.session.user;
        
        const myFriend = await Family.findAll({
            where: {
                follower_no: currentUser.user_no
            }
        })
        
        const friendUserNo = myFriend.map(friend => friend.following_no)
        
        const friendMemo = await Memo.findAll({
            where: {
                user_no : {[Op.in] : friendUserNo}
            }
        })
        return res.status(200).json({friendMemo})

    }catch (error){
        console.log(error)
        return res.status(500).json({ error : 'get friend memo error'})
    }
})

module.exports = router;