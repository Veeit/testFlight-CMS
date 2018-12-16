import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },

  addPost (arg) {
    return Api().post('posts', arg)
  },

  updatePost (arg) {
    return Api().put('posts/' + arg.id, arg)
  },

  updateComponentList (arg) {
    return Api().put('posts/' + arg.id + '/new', arg)
  },

  deleteComponent (arg) {
    return Api().delete('posts/' + arg.id + '/del', arg)
  },

  // deleteComponent (id) {
  //   return Api().put('posts/del/' + id)
  // },

  getPost (arg) {
    return Api().get('post/' + arg.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
