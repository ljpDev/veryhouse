var deviceModel = require('../../models/deviceMod/devicemod')

exports.list = function (req, res, next) {
  deviceModel.findAll(function (err, doc) {
    if (!err) {
      if (doc) {
        res.send({
          code: 0,
          msg: '',
          data: doc
        })
      } else {
        res.send({
          status: 101,
          message: 'cant find devices!'
        })
      }
    } else {
      console.log(err)
    }
  })
}

exports.findByName = function (req, res, next) {
  var _value = req.body.tvalue
  deviceModel.findOne({name: _value}, function (err, doc) {
    if (!err) {
      if (doc) {
        res.send({
          status: 12,
          message: '找不到对应的设备!'
        })
      } else {
        res.send(doc)
      }
    }
  })
}
exports.doDeviceAdd = function (req, res, next) {
  var json = JSON.parse(req.body.content) // 把客户端的Json字符串转化为object
  if (json._id) {
      // update
  } else {
      // insert
    deviceModel.save(json, function (err) {
      if (err) {
        res.send({'success': false, 'err': err})
      } else {
        res.send({'success': true})
      }
    })
  }
}
