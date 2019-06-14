// 获取博客列表
const getList = (author, keyword) => {
  // 先返回假数据，但是格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1560442317407,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1560442329201,
      author: 'lisi'
    }
  ]
}

// 获取博客详情
const getDateil = (id) => {
  // 先返回假数据，但是格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1560442317407,
      author: 'zhangsan'
    }
  ]
}

// 新增一篇博客   blogData = {}表示blogData为空的话，就给一个空对象
const postNewBlog = (blogData = {}) => {
  // blogData 是一个object，包含title、content、属性
  return {
    id: 3
  }
}

module.exports = {
  getList,
  getDateil,
  postNewBlog
}
