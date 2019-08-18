# express

## 搭建项目步骤
- 安装express-generator脚手架：npm i express-generator -g
- 生成项目：express 项目name
- 安装依赖：npm i
- 启动：npm start

### 安装项目自动刷新和重启的依赖
- 安装 nodemon, cross-env: npm i nodemon cross-env --save-dev
- 配置 package.json 文件: "dev": "cross-env NODE_ENV=dev nodemon ./bin/www"
- 启动项目: npm run dev

## 项目结构介绍 (express-genarator默认生成一个全栈结构)
```
  blog-express
    bin
      www           // 配置文件，入口配置
    node_modules    // 依赖
    public          // 前端静态文件 (本项目只做后台，故暂不处理)
    routes          // 路由文件
    views           // 前端页面 (本项目只做后台，故暂不处理)
    app.js          // 入口代码
    package.json    // 依赖包管理文件
    README.ms       // 项目描述文件
```

