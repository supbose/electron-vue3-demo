import layout from './layout'

let LayoutData = []
// 多维数据变一纬数组 ==》递归
layout.forEach(_forEach)
function _forEach(data) {
    if (data.children) {
        data.children.forEach(_forEach)
    } else {
        delete data.flag;
        LayoutData.push(data)
    }
}

const routes = [
    {
        path: "/login",
        // name:'login',
        component: () => import("@/views/Login"),
    },
    // {
    //   path: '/',
    //   component: () => import('@/views/Layout'),
    //   // redirect: '/dashboard',
    // },
    {
        path: '/layout',
        name:'layout',
        component: () => import('@/views/Layout'),
        children: [
            {
                path: '',
                redirect: LayoutData[0].path,
            },
            ...LayoutData
        ]
    },
    {
        // path: '/:catchAll(.*)',
        // component: () => import('@/views/Found')
        path: '/:pathMatch(.*)*',
    component: () => import('@/views/Found'),
    meta: {
        title: '找不到页面'
    }
    }
]

export default routes
