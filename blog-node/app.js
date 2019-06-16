const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST') {
      resolve({})
      return
    }

    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if(!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式为 JSON
  res.setHeader('Content-Type', 'application/json')

  // 获取 path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(url.split('?')[1])

  // 处理 post data
  getPostData(req).then(postData => {
    req.body = postData
  
    // 处理 blog 路由
    const blogResult = handleBlogRouter(req, res)
    if(blogResult) {
      blogResult.then(resBlog => {
        res.end(JSON.stringify(resBlog))
      })
      return
    }

    // 处理 user 路由
    const userResult = handleUserRouter(req, res)
    if(userResult) {
      userResult.then(resUser => {
        res.end(JSON.stringify(resUser))
      })
      return
    }

    // 未命中路由，返回404
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.write('404 not found')
    res.end()
  })
}

module.exports = serverHandle
