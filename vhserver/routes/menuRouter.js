var express = require('express')
var router = express.Router()
var menuController = require('../controllers/menu/menuController')

router.get('/list', menuController.list)
router.post('/findByName', menuController.findByName)
module.exports = router
