var mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
  _id: {type: String},
  name: {type: String},
  showName: {type: String, default: '导航'},
  children: [
    {type: String, ref: 'menu'}
  ]
})

menuSchema.index({_id: 1})
menuSchema.pre('find', function (next) {
  if (!this.parent) {
    this.populate('children')
  }
  next()
})

const Menu = mongoose.model('menu', menuSchema)

module.exports = Menu
