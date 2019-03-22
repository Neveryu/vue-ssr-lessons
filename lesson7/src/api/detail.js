const projectList = [
  {
    id: 1,
    name: 'blog',
    address: 'https://neveryu.github.io/index.html',
    author: 'Yu',
    description: '使用GitPage搭建的博客'
  },
  {
    id: 2,
    name: '用vue写的一个外卖app',
    address: 'https://git.io/fhpw4',
    author: 'Yu',
    description: 'vue构建的移动端外卖app'
  },
  {
    id: 3,
    name: '用vue构建的一个后台管理系统',
    address: 'https://git.io/fp9UM',
    author: 'Yu',
    description: 'vue构建的一个后台管理系统'
  },
  {
    id: 4,
    name: '用vue写的一个音乐app',
    address: 'https://git.io/fhnor',
    author: 'Yu',
    description: 'vue构建的移动端音乐app'
  },
  {
    id: 5,
    name: 'vue的预渲染实例',
    address: 'https://git.io/fp8xw',
    author: 'Yu',
    description: '一个vue预渲染示例'
  },
  {
    id: 6,
    name: 'vue服务端渲染实例',
    address: 'https://github.com/Neveryu/vue-ssr-lessons',
    author: 'Yu',
    description: 'vue ssr 实例'
  },
  {
    id: 7,
    name: 'CSDN',
    address: 'https://blog.csdn.net/csdn_yudong',
    author: 'Yu',
    description: '我的csdn博客'
  },
  {
    id: 8,
    name: '我的主页',
    address: 'https://neveryu.github.io/neveryu/index.html',
    author: 'Yu',
    description: '个人主页'
  },
  {
    id: 9,
    name: '我的 GitHub',
    address: 'https://github.com/Neveryu',
    author: 'Yu',
    description: '托管一些我的项目代码'
  }
]

export function getProjectList() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, projectList)
  })
}

export function getItem(id) {
  let Item = {}
  Item.total = projectList.length
  Item.item = {}
  for(let i = 0; i < projectList.length; i++) {
    if(projectList[i].id === parseInt(id)) {
      Item.item = projectList[i]
      break
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, Item)
  })
}
