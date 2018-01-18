var userModel = require('../../models/user/user')
var formidable = require('formidable')
var crypto = require('crypto')
var bodyParser = require('body-parser')
var dtime = require('time-formater')

var jsonParser = bodyParser.json()

function encryption (password) {
  const newpassword = Md5(Md5(password).substr(2, 7) + Md5(password))
  return newpassword
}

function Md5 (password) {
  const md5 = crypto.createHash('md5')
  return md5.update(password).digest('base64')
}

exports.login = function (req, res, next) {
  var _name = req.body.name
  var _pwd = encryption(req.body.password)
  userModel.findOneAndUpdate(
    {name: _name, password: _pwd},
    {$set: {login_time: Date.now()}},
    function (err, doc) {
      if (!err) {
        console.log(doc)
        if (doc) {
          res.send({
            code: 0,
            msg: '',
            data: doc
          })
        } else {
          res.send({
            code: 98,
            msg: '登陆名或者密码错误',
            data: {}
          })
        }
      }
    })
}

exports.sigup = function (req, res, next) {
  var _name = req.body.name
  var _pwd = encryption(req.body.password)
  var _phone = req.body.phone
  console.log('users/register')
  console.log(req.body)
  userModel.findOne({name: _name}, function (err, doc) {
    if (err) {
      return next(err)
    }
    if (doc) {
      res.send({
        status: 12,
        message: '该用户已经存在!'
      })
    } else {
      const newUser = {
        name: _name,
        password: _pwd,
        phone: _phone,
        create_time: Date.now()
      }
      userModel.create(newUser).then(
        res.send({
          status: 0,
          message: '创建用户成功！'
        })
      )
    }
  })
}
