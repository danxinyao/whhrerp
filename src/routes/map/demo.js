const Demo = resolve => require(['views/demo/index.vue'], resolve)

export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            title: 'Demo',
        }
    }
]