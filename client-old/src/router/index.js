import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts.vue'
import NewPost from '@/components/NewPost.vue'
import EditPost from '@/components/EditPost.vue'
import ShowPost from '@/components/ShowPost.vue'
import EditPostComponent from '@/components/EditPostComponent.vue'
import NewPostComponent from '@/components/NewPostComponent.vue'

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
    },
    {
      path: '/posts/:id/edit/:compID',
      name: 'EditPostComponent',
      component: EditPostComponent
    },
    {
      path: '/posts/:id/new/:compType',
      name: 'NewPostComponent',
      component: NewPostComponent
    }
  ]
})
