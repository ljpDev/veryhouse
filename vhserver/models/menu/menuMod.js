var mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
  _id: {type: String},
  name: {type: String},
  showName: {type: String, default: '导航'},
  parent: {type: String}
})

menuSchema.index({id: 1})

const Menu = mongoose.model('user', menuSchema)

module.exports = Menu
