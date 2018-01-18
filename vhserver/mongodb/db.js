// 数据库链接文件
// 默认使用的db，mongodb

var mongoose = require('mongoose')
var config = require('config-lite')(__dirname)
var chalk = require('chalk')

mongoose.connect(config.url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', () => {
  console.log(
    chalk.red('连接数据库成功url=' + config.url)
  )
})

db.on('error', function (error) {
  console.error(
    chalk.red('Error in MongoDb connection: ' + error)
  )
  mongoose.disconnect()
})

db.on('close', function () {
  console.log(
    chalk.red('数据库断开，重新连接数据库')
  )
  mongoose.connect(config.url, {
    server: {
      auto_reconnect: true
    }
  })
})

module.exports = db
