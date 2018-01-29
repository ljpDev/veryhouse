var mongoose = require('mongoose')
const Schema = mongoose.Schema

const sellerSchema = new Schema({
  _id: {type: String},
  name: {type: String},
  showName: {type: String, default: '导航'},
  children: [
    {type: String, ref: 'menu'}
  ]
})

sellerSchema.index({_id: 1})

const Seller = mongoose.model('menu', sellerSchema)

module.exports = Seller
