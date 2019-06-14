const loginCheck = (username, passworld) => {
  // 先返回假数据
  if(username === 'zhangsan' && passworld === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck
}
