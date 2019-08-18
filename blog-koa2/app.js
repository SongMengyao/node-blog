const Koa = require('koa')
const app = new Koa()
const views = require('koa-views') // 前端：处理 views 文件夹内容，暂不处理
const json = require('koa-json') // 处理 post data 格式
const onerror = require('koa-onerror') // 处理 error
const bodyparser = require('koa-bodyparser') // 处理 post body
const logger = require('koa-logger') // 处理日志

// 引入路由
const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')
const user = require('./routes/user')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public')) // 处理 public 静态文件，暂不处理
// 处理前端 views 页面，暂不处理
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`logger：${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
