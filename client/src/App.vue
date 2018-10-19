<template>
  <div id="app">
    <div class="sitenav">
      <h1>TestFlight CMS</h1>
      <h2>Main</h2>
      <ul v-for="item in NavItems" :key="item">
        <li><router-link :to="{ path: item.link }">{{item.name}}</router-link></li>
      </ul>
    </div>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      NavItems: [
        {name: 'Page List', link: '/posts'},
        {name: 'New Page', link: '/posts/new'},
        {name: 'Ich'},
        {name: 'bin'},
        {name: 'ein'},
        {name: 'neues'},
        {name: 'cms'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 20vw 80vw;
  grid-template-rows: auto;
  grid-template-areas: "nav view";
}
.sitenav {
  grid-area: nav;
}
#view {
  grid-area: view;
}
</style>
