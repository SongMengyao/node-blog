const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1 '
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += 'order by createtime desc;'
  
  // 返回 promise
  return exec(sql)
}

// 获取博客详情
const getDateil = (id) => {
  let sql = `select * from blogs where id=${id}`

  return exec(sql).then(itemBlog => {
    return itemBlog
  })
}

// 新增一篇博客   blogData = {}表示blogData为空的话，就给一个空对象
const postNewBlog = (blogData = {}) => {
  // blogData 是一个object，包含title、content、author, createtime属性
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createtime = Date.now()
  let sql = `
    insert into blogs (title, content, author, createtime)
    values ('${title}', '${content}', '${author}', ${createtime})
  `
  return exec(sql).then(newData => {
    return {
      id: newData.insertId
    }
  })
}

 // 更新一篇博客
 const postUpdateBlog = (id, blogData = {}) => {
   // id 是被更新的博客的id
   // blogData 是一个object，包含title、content、属性
   console.log('update id blogData-->', id, blogData)
   return true
 }

 // 删除一篇博客
 const postDelBlog = (id) => {
   // id 是被删除的博客的id
   return true
 }

module.exports = {
  getList,
  getDateil,
  postNewBlog,
  postUpdateBlog,
  postDelBlog
}
