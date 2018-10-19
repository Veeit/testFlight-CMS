import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts.vue'
import NewPost from '@/components/NewPost.vue'
import EditPost from '@/components/EditPost.vue'
import ShowPost from '@/components/ShowPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/posts/Show/:id',
      name: 'ShowPost',
      component: ShowPost
    }
  ]
})
