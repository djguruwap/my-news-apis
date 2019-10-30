const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/UserController')

router.post('/signup',user_controller.sing_up)
router.post('/login',user_controller.login)


module.exports = router