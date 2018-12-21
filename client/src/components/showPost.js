import React from 'react';
import PostsService from '../services/PostsService.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class showPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.getPosts = this.getPosts.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async deletePost(id) {
    await PostsService.deletePost(id)
    this.getPosts()
  }
  async getPosts() {
    var postsList = [];
    const response = await PostsService.fetchPosts()
    var posts = response.data.posts
    Object.keys(posts).forEach(function(value, i) {
      if (i < posts.length) {
        postsList.push(
          <tr key={i}>
            <td>{posts[i].title}</td>
            <td>{posts[i].description}</td>
            <td>
              <a href="#" onClick={() => {this.deletePost(posts[i]._id)}}>Delete</a>
            </td>
          </tr>
        );
      }
    }, this);
    this.setState({posts: postsList});
  }

  componentDidMount() {
    // this.getPosts().then(result => { this.setState({posts: result}); })
    this.getPosts()
  }

  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className="posts">
          <h1>Posts</h1>
          <table>
            <tbody>
              <tr>
                <th id="Title">Title</th>
                <th id="Description">Description</th>
                <th id="Action">Action</th>
              </tr>
              {this.state.posts}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          There are no pages.. Lets add one now <br /><br />
          <Link to={{pathname: 'NewPost' }} className="add_post_link">Add Post</Link>
        </div>
      )
    }
  }
}
