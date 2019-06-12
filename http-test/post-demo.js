const http = require('http')

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    console.log('req.headers----->', req.headers)
    console.log('req.headers: content-type----->', req.headers['content-type'])

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log('postData---->', postData)
      res.end('Hello world !')
    })
  }
})

server.listen(3001)

console.log('post-demo: app runing at 3001 port !')

