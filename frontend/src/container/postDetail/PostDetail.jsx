import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Post from '../../post';

import { getPost } from '../../actions/ActionCreator';
import { getPost as API_getPost } from '../../api';
const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
};

class PostDetail extends Component {
  constructor(prop) {
    super(prop);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    API_getPost(id).then(res => {
      this.props.getPost(id, res);
    });
  }
  render() {
    return (
      <div className="container">
        <Post info={this.props.post} />
        <h3>Comments</h3>
        <div className="row">
          <div className="col s6">
            <label>Categories</label>
            <select className="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="col s6">
            <label>sorting</label>
            <select className="browser-default">
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        {/* <Post type={TYPE.COMMENT} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.currentPost,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPost,
    },
    dispatch,
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetail),
);
