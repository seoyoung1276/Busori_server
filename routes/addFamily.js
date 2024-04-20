const express = require('express')
const User = require('../models/User')
const Family = require('../models/Family')
const router = express.Router()

// 친구 추가 요청 보내기
router.post('/sendfollow', async (req, res) => {
    try{
        const { invite_code } = req.body;
        const findInviteCode = await User.findOne({ where: {invite_code}})
        
        if(findInviteCode){
            const currentUser = req.session.user;

            const newFamily = await Family.create({
                following_no : findInviteCode.user_no,
                follower_no : currentUser.user_no
            })
            return res.status(201).json(newFamily)
        }else{
            console.log(error)
            return res.status(404).json({ error : 'Wrong Invite Code'})
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({ error : 'send follow error'})
    }
})


module.exports = router;