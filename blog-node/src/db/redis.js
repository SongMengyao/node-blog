const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.log('redis err: ', err)
})

// set
function set (key, val) {
  if (typeof val === Object) {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val, redis.print)
}

// get
function get (key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }

      if (val == null) {
        resolve(null)
      }

      // try catch 是为了兼容val的所有格式，比如对象、字符串等，这里不代表捕捉错误
      try {
        resolve(JSON.parse(val))
      } catch (err) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  set,
  get
}
