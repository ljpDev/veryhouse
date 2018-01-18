var mongoose = require('mongoose')
const Schema = mongoose.Schema

var userModel = require('../user/user')

const deviceSchema = new Schema({
  order: {type: Number},
  name: {type: String},
  color: {type: String},
  system: {type: String},
  mac_addr: {type: String},
  current_user: {type: Schema.Types.ObjectId, ref: 'user'},
  borrow_date: {type: String},
  team: {type: String},
  contact_info: {type: String},
  status: {type: String}, // 00:正常 01:异常 09:已经销毁
  pics: [{
    purl: {type: String},
    pdes: {type: String},
    pdate: {type: String}
  }],
  histroy_users: [{
    huser: {type: Schema.Types.ObjectId, ref: 'user'},
    hreturned_date: {type: String},
    hnote: {type: String}
  }]
})
deviceSchema.index({name: 1})

const Device = mongoose.model('device', deviceSchema)

var DeviceDAO = function () {}

DeviceDAO.prototype.findAll = function (cb) {
  Device.find()
  .populate('current_user')
  .populate('histroy_users.huser')
  .exec(function (err, obj) {
    cb(err, obj)
  })
}

DeviceDAO.prototype.findByID = function (oid, cb) {
  Device.findOne({order: oid}, function (err, obj) {
    cb(err, obj)
  })
}

DeviceDAO.prototype.findByName = function (dname, cb) {
  Device.findOne({name: dname}, function (err, obj) {
    cb(err, obj)
  })
}

DeviceDAO.prototype.save = function (obj, cb) {
  var instance = new DeviceDAO(obj)
  instance.save(function (error) {
    cb(error)
  })
}

DeviceDAO.prototype.update = function (obj, cb) {
  Device.findOne({name: obj.name}, function (err, doc) {
    var instance = new DeviceDAO(obj)
    instance.save(function (error) {
      cb(error)
    })
  })
}

module.exports = new DeviceDAO()
