const Layout = () => import('@/layout/index.vue')

export default {
    path: '/multilevel_menu_example',
    component: Layout,
    redirect: '/multilevel_menu_example/page',
    name: 'multilevelMenuExample',
    meta: {
        title: '多级导航',
        icon: 'sidebar-menu'
    },
    children: [
        {
            path: 'page',
            name: 'multilevelMenuExample1',
            component: () => import('@/views/multilevel_menu_example/page.vue'),
            meta: {
                title: '导航1'
            }
        }
         ]

}
