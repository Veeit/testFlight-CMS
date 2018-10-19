<template>
  <div class="posts">
    <h1>Show Page</h1>
      <div class="form">
        <div>
          <h2>{{title}}</h2>
        </div>
        <div>
          <h3>Description:</h3>
          <span>{{description}}</span>
        </div>
        <div>
          <h3>Components:<button>Add</button></h3>
          <span>{{components}}</span>
        </div>
      </div>
      <router-link v-bind:to="{ name: 'Posts' }" >Back</router-link>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data () {
    return {
      title: '',
      description: '',
      components: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.components = response.data.components
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #158BB6;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
