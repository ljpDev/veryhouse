var express = require('express')
var router = express.Router()
var userController = require('../controllers/user/user')

/* GET users listing. */
router.get('/u1', function (req, res, next) {
  // res.send('respond users')
  console.log('login router')
  userController.login(req, res, next)
})

router.post('/login', userController.login)
router.post('/register', userController.sigup)
module.exports = router
