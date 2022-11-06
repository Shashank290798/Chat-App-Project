const { Router } = require('express');
const express = require('express')
const router = express.Router();

const usercontroller = require('../controllers/user')

const chatcontroller = require('../controllers/chats')
const userauthenticate = require('../middleware/Auth')

const groupChatcontroller = require('../controllers/group')

router.post('/signup' , usercontroller.signup)

router.post('/login',usercontroller.login)

router.post('/chatsstart',userauthenticate.authenticate,chatcontroller.userMessage)

router.get('/getchats' , userauthenticate.authenticate , chatcontroller.getMessage)

router.post('/postgroupChatting',userauthenticate.authenticate,groupChatcontroller.groupMessage)

router.get('/getgroupChat',userauthenticate.authenticate,groupChatcontroller.groupdetails)

router.post('/postmessage/:id',userauthenticate.authenticate,groupChatcontroller.postMessage)

router.get('/getmessage/:id',groupChatcontroller.getMessage)

router.post('/AddUser/:id',groupChatcontroller.addUser)
router.get('/getUser/:id',userauthenticate.authenticate,groupChatcontroller.getUser)

router.post('/deleteUser/:id',groupChatcontroller.deleteUser)

router.post('/makeAdmin/:id',groupChatcontroller.MakeAdmin)

router.post('/removeAdmin/:id',groupChatcontroller.RemoveAdmin)

module.exports = router;