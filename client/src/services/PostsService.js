import Api from './Api'

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

  getPost (arg) {
    return Api().get('post/' + arg.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
