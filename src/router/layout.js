const layout = [
    {
        path: '/layout/home',
        name: '首页',
        icon:'shouye icon-shouye',
        component: () => import('@/views/Home')
    },
    {
      path:'/layout/personal',
      name:'个人中心',
      icon:'shouye icon-shouye',
      component: () => import ('@/views/Personal')
    }
]

export default layout
