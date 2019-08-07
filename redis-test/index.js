const redis = require('redis')

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
  console.log('redis err: ', err)
})

// 测试
redisClient.set('myname', 'songmengyao', redis.print)
redisClient.get('myname', (err, val) => {
  if (err) {
    console.log('get err: ', err)
    return
  }
  console.log('get ok: ', val)

  // 退出 redis
  redisClient.quit()
})
