// GET 请求 demo
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log('req.method----->', req.method)

  const url = req.url
  console.log('url---->', url)
  req.query = querystring.parse(url.split('?')[1])
  console.log('req.query----->', req.query)
  res.end(JSON.stringify(req.query))

})

server.listen(3002)

console.log("app running at 3000 port !")
