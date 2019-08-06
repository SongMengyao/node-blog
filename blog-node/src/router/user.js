const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if(method === 'GET' && req.path === '/api/user/login') {
    // const { username, password } = req.body
    const { username, password } = req.query

    const result = login(username, password)
    return result.then(data => {
      if(data.username) {
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
        console.log('sessoin is : ', req.session)

        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }

  // 登录验证 - 测试
  if(method === 'GET' && req.path === '/api/user/login-test') {
    if(req.session.username) {
      return Promise.resolve(new SuccessModel({
        session: req.session
      }))
    }
    return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

module.exports = handleUserRouter
