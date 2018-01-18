var users = require('./users')
var devices = require('./deviceRouter')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/users')
  })
  app.use('/users', users)
  app.use('/dev', devices)
  // app.use('/signin', require('./signin'))
  // app.use('/signout', require('./signout'))
  // app.use('/posts', require('./posts'))
  // app.use('/comments', require('./comments'))

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
