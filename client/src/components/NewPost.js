import React from 'react';
import PostsService from '../services/PostsService.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Redirect } from 'react-router';
const StyleGloabl = styled.div`
  div {
    color: red;
  }
`

export default class newPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  async addPost(event) {
    await PostsService.addPost({
      title: this.state.title,
      description: this.state.description
    })
    event.preventDefault();
    // this.$router.push({ name: 'Posts' })
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="posts">
        <StyleGloabl>
          <h1>New Post</h1>
          <form onSubmit={this.addPost}>
            <label>
              <p>val: {this.state.title}</p>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
              <p>val: {this.state.description}</p>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </StyleGloabl>
      </div>
    );
  }
}
