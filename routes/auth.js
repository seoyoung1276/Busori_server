const express = require('express')
const User = require('../models/User')
const router = express.Router()

// 회원가입
router.post('/signup', async (req, res) => {
    try {

        const { id, password, role, name, age } = req.body;
        const invite_code = generateInviteCode();

        const newUser = await User.create({
            id : id,
            password : password,
            role : role,
            name : name,
            age : age,
            invite_code, invite_code
        });

        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error : 'sign up server error' });
    }

})


// 로그인
router.post('/login', async (req, res) => {
    try {
        const {id, password} = req.body;

        const user = await User.findOne({ where: {id} });

        if(user){
            if(password === user.password){
                req.session.user = user;

                console.log(req.session.user);
                return res.status(200).json(user);
            }else{
                return res.status(401).json({ error : 'Unauthorized'})
            }
        }else {
            return res.status(404).json({ error : 'User Not Found'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error : 'login error '})
    }
})



function generateInviteCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
}

module.exports = router;