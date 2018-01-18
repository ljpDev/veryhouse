var express = require('express')
var router = express.Router()
var deviceController = require('../controllers/device/deviceController')

router.get('/list', deviceController.list)
router.post('/findByName', deviceController.findByName)
module.exports = router
