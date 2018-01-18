var menuModel = require('../../models/menu/menuMod')

exports.list = function (req, res, next) {
  menuModel.find({_id: 'menu0'})
  .populate('children')
  .exec(function (err, doc) {
    if (!err) {
      if (doc) {
        res.send({
          code: 0,
          msg: '获取成功',
          data: doc
        })
      } else {
        res.send({
          status: 101,
          message: 'cant find menus!'
        })
      }
    } else {
      console.log(err)
    }
  })
}

exports.findByName = function (req, res, next) {
  var _value = req.body.tvalue
  menuModel.findOne({name: _value}, function (err, doc) {
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
    menuModel.save(json, function (err) {
      if (err) {
        res.send({'success': false, 'err': err})
      } else {
        res.send({'success': true})
      }
    })
  }
}
