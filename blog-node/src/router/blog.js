const { getList, getDateil, postNewBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const detailData = getDateil(id)
    return new SuccessModel(detailData)
  }

  // 新增一篇博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const data = postNewBlog(req.body)
    return new SuccessModel(data)
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
