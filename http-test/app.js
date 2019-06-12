// get/post 综合demo
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  res.setHeader('Content-Type', 'application/json')
  const httpData = {
    method,
    url,
    path,
    query
  }

  if(method === 'GET') {
    res.end(JSON.stringify(httpData))
  }
  if(method === 'POST') {
    let postData = ''

    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      httpData.postData = {
        postData
      }
      res.end(JSON.stringify(httpData))
    })
  }

})
server.listen(3000)
console.log('综合 demo running at 3000 port !')
