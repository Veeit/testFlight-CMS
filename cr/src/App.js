import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="sitenav">
          <h1>TestFlight CMS</h1>
          <h2>Main</h2>
          <ul v-for="item in NavItems" :key="item.id">
            <li><router-link :to="{ path: item.link }">{{item.name}}</router-link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

<div id="app">
  <div class="sitenav">
    <h1>TestFlight CMS</h1>
    <h2>Main</h2>
    <ul v-for="item in NavItems" :key="item.id">
      <li><router-link :to="{ path: item.link }">{{item.name}}</router-link></li>
    </ul>
  </div>
  <div id="view">
    <router-view/>
  </div>
</div>


export default App;
