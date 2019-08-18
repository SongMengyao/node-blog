const fs = require('fs')
const path = require('path')

// // callback 方式获取一个文件的内容
// function getFileContent(fileName, callback) {
//   const fullFileName = path.resolve(__dirname, 'files', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if(err) {
//       console.log('err---->', err)
//       return
//     }
//     callback(JSON.parse(data.toString()))
//   })
// }

// // callback test  callback-hell（回调地狱）
// getFileContent('a.json', aData => {
//   console.log('a data--->', aData)
//   getFileContent(aData.next, bData => {
//     console.log('b data--->', bData)
//     getFileContent(bData.next, cData => {
//       console.log('c data--->', cData)
//     })
//   })
// })

// 用 promise 获取文件内容
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if(err) {
        console.log('err---->', err)
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}

// getFileContent('a.json').then(aData => {
//   console.log('a data---->', aData)
//   return getFileContent(aData.next)
// }).then(bData => {
//   console.log('b data---->', bData)
//   return getFileContent(bData.next)
// }).then(cData => {
//   console.log('c data---->', cData)
// })

// async await, 这两者后面都可以跟 promise 对象
async function readFileData () {
  // 同步写法
  const aData = await getFileContent('a.json')
  console.log('a data---->', aData)

  const bData = await getFileContent(aData.next)
  console.log('b data---->', bData)

  const cData = await getFileContent(bData.next)
  console.log('c data---->', cData)
}
readFileData()

// 要点：
// 1. await 后面可以加 promise 对象
// 2. await 必须包裹在 async 函数里面
// 3. async 函数执行返回的也是一个 promise 对象
// 4. try-catch 截获 promise 中 reject 的值
