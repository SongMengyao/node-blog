const serverHandle = (req, res) => {
  res.setHandle('Content-Type', 'application/json')

  const resData = {
    name: '宋梦瑶',
    site: 'imooc',
    env: process.env.NODE_ENV
  }

  res.end(JSON.stringify(resData))
}

module.exports = serverHandle
