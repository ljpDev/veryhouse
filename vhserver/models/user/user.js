var mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {type: String}, // 用户名称
  nickname: {type: String, default: '我的昵称'}, // 昵称
  password: {type: String}, // 密码
  sex: {type: String, default: 'unknow'}, // 性别
  phone: {type: String}, // 手机号码
  avatar: {type: String, default: 'default.jpg'}, // 头像
  create_time: {type: Date, default: Date.now()},  // 创建时间
  login_time: {type: Date, default: Date.now()}, // 最后登陆时间
  father_group: {type: String, default: '00'},  // 00:业务人员 01:开发人员、 99:超级管理员
  status: {type: String, default: '00'}, // 00:正常 01:异常
  city: {type: String, default: 'hangzhou'}  // 杭州 合肥
})

userSchema.index({id: 1})

const User = mongoose.model('user', userSchema)

module.exports = User
