const env = process.env.NODE_ENV  // 环境变量

// 配置
let MYSQL_CONF
if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test190806'
  }
}

if(env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test190806'
  }
}

module.exports = {
  MYSQL_CONF
}
