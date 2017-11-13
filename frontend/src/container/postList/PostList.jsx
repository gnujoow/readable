import React, { Component } from 'react';
import Post from '../../post'

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
}

class PostList extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <label>Categories</label>
            <select className="browser-default">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="col s6">
            <label>sorting</label>
            <select className="browser-default">
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default PostList;
