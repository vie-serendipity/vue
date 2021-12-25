import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: () => import('@/components/HelloWorld'),
      meta: {}
    },
    {
      path: '/blog',
      name: 'Blog',
      alias: '/ps',
      component: Blog,
      children: [
        {
          path: 'child',
          name: 'blogchild',
          component: {
            default: ()=> import('@/components/HelloWorld'),
          },
        }
      ]
    }
  ]
})
