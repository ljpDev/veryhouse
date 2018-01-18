module.exports = {
  port: 8881,
  url: 'mongodb://localhost:27017/veryhouse',
  session: {
    name: 'VHSID',
    secret: 'VHSID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  }
}
