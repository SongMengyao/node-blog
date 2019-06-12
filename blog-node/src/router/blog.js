const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: '获取博客列表 接口'
    }
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '获取博客详情 接口'
    }
  }

  // 新增一篇博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '新增一篇博客 接口'
    }
  }

  // 更新一篇博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新一篇博客 接口'
    }
  }

  // 删除一篇博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '删除一篇博客 接口'
    }
  }
}

module.exports = handleBlogRouter
