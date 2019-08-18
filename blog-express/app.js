var createError = require('http-errors'); // 处理 404
var express = require('express');
var path = require('path'); // 处理路径的工具
var cookieParser = require('cookie-parser'); // 解析cookie
var logger = require('morgan'); // 日志

// 引用路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');

var app = express();

// view engine setup 前端：views文件夹，暂不处理
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 使用插件
app.use(logger('dev'));
app.use(express.json()); // 处理 req body
app.use(express.urlencoded({ extended: false })); // post data 兼容 urlencoded 格式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 前端：对应 pubilc 文件夹，暂不处理

// 注册路由
app.use('/', indexRouter); // 跟路由是 '/'
app.use('/users', usersRouter); // 跟路由是 '/users'
app.use('/api/blog', blogRouter); // 跟路由是 '/api/blog'
app.use('/api/user', userRouter); // 跟路由是 '/api/user'

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
