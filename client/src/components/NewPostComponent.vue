<template>
  <div class="form">
    <h1>New {{compType}} Component</h1>
    <span>{{components}}</span>
    <span>{{titleComp}}</span>
    <div class="new">
      <table>
        <tr>
          <td>Title</td>
          <td><input type="text" name="title" placeholder="components" v-model="titleComp"></td>
        </tr>
        <tr>
          <td>Text:</td>
          <td><input type="text" name="text" placeholder="components" v-model="textComp"></td>
        </tr>
      </table>
    </div>
    <div>
      <router-link v-bind:to="{ name: 'ShowPost' }" ><button class="app_post_btn">Back</button></router-link>
      <button class="app_post_btn" @click="updateComponentList()">save</button>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPostComponent',
  data: function () {
    return {
      title: '',
      description: '',
      components: '',
      titleComp: '',
      textComp: '',
      compType: this.$route.params.compType
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
    async updateComponentList () {
      await PostsService.updateComponentList({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        components: this.components,
        newComponent: {'type': 'TextComp', 'Titel': this.titleComp, 'text': this.textComp},
        newCompID: 'v' + this._uid
      })
    }
  }
}
</script>
