import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from '../../post';

import { getAllPosts } from '../../actions/ActionCreator';
import * as Api from '../../api';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'asc',
      categories: 'react',
    };
  }
  componentDidMount() {
    Api.getAllPosts().then(res => this.props.getAllPosts(res));
  }
  shouldComponentUpdate(prevProp, prevState) {
    return true;
  }

  render() {
    const posts = this.props.posts;
    const filteredPosts = Object.values(posts).filter(post => post);
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <label>Categories</label>
            <select className="browser-default">
              {this.props.categories.map(category => (
                <option id={category.name} value={category.name}>
                  {category.path}
                </option>
              ))}
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
        {filteredPosts.map(post => <Post key={post.id} info={post} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.allPosts,
    categories: state.categories,
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
