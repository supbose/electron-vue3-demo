const layout = [
    {
        path: '/layout/home',
        name: '首页',
        icon:'shouye icon-shouye',
        component: () => import('../views/Home')
    },
    // {
    //     path: '/layout/icon',
    //     name: '图标',
    //     icon:'图标 icon-tubiao1',
    //     component: () => import('../views/Icon')
    // },
    {
      path:'/layout/personal',
      name:'个人中心',
      icon:'shouye icon-shouye',
      component: () => import ('../views/Personal')
    }
]

export default layout
