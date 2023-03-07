const PageView = require('../models/PageView')

const register = async (req, res, next) => {
  await PageView.create({
    path: req.path,
    date: new Date(),
    userAgent: req.headers['user-agent'],
  })
  next()
}
module.exports = {register}
