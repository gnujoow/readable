import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';
import PostList from './container/postList';
import PostDetail from './container/postDetail';
import Form from './container/form';

import { getAllPosts } from './actions/ActionCreator';
import * as Api from './api';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Form /> */}
          {/* <PostList /> */}
          {/* <PostDetail /> */}

          <Route exact path="/" component={PostList} />
          <Route path="/search" component={PostDetail} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
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

export default App;
