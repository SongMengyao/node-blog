const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

// 读取文件内容
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log('读取文件失败 err：', err)
    return
  }

  // data是二进制类型，需要转换成字符串，即：data.toString()
  console.log('读取文件成功 data：', data.toString())
})

// 写入文件
const content = '这是新写入的内容\n'
const opt = {
  flag: 'a'  // 追加写入  覆盖用‘w’
}

fs.writeFile(fileName, content, opt, (err) => {
  if (err) {
    console.log('写入错误 err：', err)
    return
  }

  console.log('写入成功！')
})

// 判断文件是否存在
fs.exists(fileName, (exist) => {
  console.log('文件是否存在 exist: ', exist)
})



// nodeJs 直接操作文件的缺点：(比如：读文件、写文件)
// 假如要读的文件过大，比如1G，一次性读完，很耗费性能，同时这1G的数据我们不一定全部都需要使用
// 假如要写的文件过大，或者一次写入一行一直调用writeFile方法，也很耗费性能
// 这些问题，在node的框架中都已经处理好了

