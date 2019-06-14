const {
  getList,
  getDateil,
  postNewBlog,
  postUpdateBlog,
  postDelBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
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
    const updateData = postUpdateBlog(id, req.body) 
    if(updateData) {
      return new SuccessModel()
    }else {
      return new ErrorModel('更新博客失败')
    }
  }

  // 删除一篇博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    const data = postDelBlog(id)
    if(data) {
      return new SuccessModel()
    }else {
      return new ErrorModel('删除博客失败')
    }
  }
}

module.exports = handleBlogRouter
