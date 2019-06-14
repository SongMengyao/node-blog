const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if(method === 'POST' && req.path === '/api/user/login') {
    const { username, passworld } = req.body
    const data = loginCheck(username, passworld)
    if(data) {
      return new SuccessModel()
    }else {
      return new ErrorModel('登录失败')
    }
  }
}

module.exports = handleUserRouter
