import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from '../../post';

import { getAllPosts } from '../../actions/ActionCreator';
import * as Api from '../../api';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
};

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'asc',
      categories: '',
    };
  }
  componentDidMount() {
    Api.getAllPosts().then(res => this.props.getAllPosts(res));
  }
  shouldComponentUpdate(prevProp, prevState) {
    console.log('prevState', prevState, 'prevProp', prevProp);
    return true;
  }

  render() {
    const posts = this.props.posts.map(post => {
      console.log(post.voteScore);
      return <Post key={post.id} info={post} />;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <label>Categories</label>
            <select className="browser-default">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="col s6">
            <label>sorting</label>
            <select className="browser-default">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.allPosts,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllPosts,
    },
    dispatch,
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostList),
);
