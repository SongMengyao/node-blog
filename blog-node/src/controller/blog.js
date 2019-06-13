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

module.exports = {
  getList,
  getDateil
}
