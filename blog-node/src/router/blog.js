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
    const result = getList(author, keyword)
    
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDateil(id)
    return result.then(detailData => {
      return new SuccessModel(detailData)
    })
  }

  // 新增一篇博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'songmengyao' // 假数据

    const result = postNewBlog(req.body)
    return result.then(newData => {
      return new SuccessModel(newData)
    })
  }

  // 更新一篇博客
  if(method === 'POST' && req.path === '/api/blog/update') {
    const result = postUpdateBlog(id, req.body) 
    return result.then(data => {
      if(data) {
        return new SuccessModel()
      }else {
        return new ErrorModel('更新博客失败')
      }
    })
  }

  // 删除一篇博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan'  // 假数据
    const result = postDelBlog(id, author)
    return result.then(data => {
      if(data) {
        return new SuccessModel()
      }else {
        return new ErrorModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter
