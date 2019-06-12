const handleUserRouter = (req, res) => {
  const method = req.method

  // 删除一篇博客
  if(method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '登录 接口'
    }
  }
}

module.exports = handleUserRouter
