<template>
  <div class="posts">
    <h1>Show Page</h1>
      <div class="form">
        <div>
          <h2>{{title}}</h2>
          <h3>Description:</h3>
          <span>{{description}}</span>
          <h3>Components:</h3>
          <select>
            <option v-for="(value, key) in components" :key="key">{{key}}</option>
          </select>
          <button>Add</button>
          <br><br>

          <span>{{components.TextComponent}}</span><br><br>
          <span>{{components}}</span>
        </div>
        <div class="new_component hidden">
          <div class="form">
            <div v-if="components">
              <input type="text" name="title" placeholder="components" v-model="components.TextComponent.id">
            </div>
            <div>
              <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
            </div>
            <div>
              <!-- <button class="app_post_btn" @click="addPost">Add</button> -->
              <button class="app_post_btn" @click="addComponents()">Add</button>
            </div>
          </div>
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
    },
    addComponents: function () {
      alert('test')
    }
  }
}
</script>
<style type="text/css">
.form div.new_component.hidden {
  display: none;
}

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
