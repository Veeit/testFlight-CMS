<template>
  <div class="form">
    <h1>Edit Component</h1>
    <div v-for="(value, key2) in components" :key="key2">
      <div v-if="key2 == comId">
        <table v-for="(val, key) in value" :key="key">
          <tr>
            <td style="width:150px">{{key}}</td>
            <td><input type="text" name="title" placeholder="components" v-model="value[key]"></td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <router-link v-bind:to="{ name: 'ShowPost' }" ><button class="app_post_btn">Back</button></router-link>
      <button class="app_post_btn" @click="updatePost">save</button>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPostComponent',
  data: function () {
    return {
      title: '',
      description: '',
      components: '',
      comId: this.$route.params.compID
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
        description: this.description,
        components: this.components
      })
      this.$router.push({ name: 'ShowPost' })
    }
  }
}
</script>
