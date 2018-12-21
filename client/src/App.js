import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import RouterView from './router/router.js'

//CSS
const StyleGloabl = styled.div`
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
`
// Varibales
const NavItems = [
  {name: 'Page List', link: '/posts'},
  {name: 'New Page', link: '/NewPost'},
  {name: 'Users'},
  {name: 'Einstellungen'},
  {name: 'Profil'},
  {name: 'logout'},
  {name: 'cms'}
];

//html :D
const AppRouter = () => (
  <Router>
    <StyleGloabl>
      <div id="app">
        <nav className="sitenav">
          <h1>TestFlight CMS</h1>
          <h2>Main</h2>
          <ul>
            {
              NavItems.map(function(name, index){
                return <li key={ index }><NavLink to={{pathname: name.link }}>{name.name}</NavLink></li>;
              })
            }
          </ul>
        </nav>
        <div id="view">
          <RouterView/>
        </div>
      </div>
    </StyleGloabl>
  </Router>
);

export default AppRouter;
