const { exec } = require('../db/mysql')

const login = (username, password) => {
  let sql = `select username, realname from users where username='${username}' and password='${password}'`

  return exec(sql).then(loginData => {
    return loginData[0] || {}
  })
}

module.exports = {
  login
}
