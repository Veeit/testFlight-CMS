import React from 'react';
import {Route} from "react-router-dom";

import posts from '../components/posts.js';
import newPosts from '../components/NewPost.js';
import showPost from '../components/showPost.js';

const routerView = () => (
  <div >
    <Route path="/posts/" component={posts} />
    <Route path="/NewPost" component={newPosts} />
    <Route path="/showPost" component={showPost} />
  </div>
);

export default routerView;
