<template>
  <div class="posts">
    <h1>Show Page</h1>
      <div class="form">
        <div>
          <table>
            <tr>
              <td style="width: 100px;"><h2 style="margin: 0px">Title:</h2></td>
              <td><h2 style="margin: 0px">{{title}}</h2></td>
            </tr>
            <tr>
              <td style="width: 100px;"><h2 style="margin: 0px">Description:</h2></td>
              <td><h2 style="margin: 0px">{{description}}</h2></td>
            </tr>
          </table>
          <h3>Components:<button  @click="variable.ishidden = !variable.ishidden">Add</button></h3>
        </div>
        <div v-bind:class="{hidden: variable.ishidden}" class="new_component" ref="new_component">
          <div class="form">
            <table v-if="components">
              <tr>
                <td>Type:</td>
                <td>
                  <select>
                    <option v-for="(value, key) in components" :key="key">{{value.type}}</option>
                  </select>
                </td>
                <td style="width: 300px;">
                  <router-link v-bind:to="{ name: 'NewPostComponent', params: { compType:'TextComponent'} }">Add</router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="show">
          <table>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Titel</th>
              <th>Controll</th>
            </tr>
            <tr v-for="(value, key) in components" :key="key">
              <td>{{ key }}</td>
              <td>{{ value.type }}</td>
              <td>{{ value.Titel }}</td>
              <td align="center">
                <router-link v-bind:to="{ name: 'EditPostComponent', params: { compID: key } }">Edit</router-link> |
                <a href="#" @click="deleteComponent(key)">Delete</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <router-link v-bind:to="{ name: 'Posts' }" >Back</router-link>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data: function () {
    return {
      title: '',
      description: '',
      components: '',
      pageID: this.$route.params.id,
      variable: {
        ishidden: true
      }
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
      // this.$router.push({ name: 'Posts' })
    },
    async deleteComponent (key) {
      await PostsService.deleteComponent({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        components: this.components,
        delCompID: key
      })
      this.getPost()
    }
  }
}
</script>
<style type="text/css">
table {
  width: 100%;
}
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
.new_component .form {
  margin: 0px;
}
</style>
