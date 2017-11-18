import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './navbar';
import PostList from './container/postList';
import PostDetail from './container/postDetail';
import Form from './container/form';

import { getCategories } from './actions/ActionCreator';
import * as Api from './api';

class App extends Component {
  componentDidMount() {
    Api.getCategories().then(res => this.props.getCategories(res));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Form /> */}
          {/* <PostList /> */}
          {/* <PostDetail /> */}

          <Route exact path="/" component={PostList} />
          <Route path="/read/:id" component={PostDetail} />
          <Route path="/new-post" component={Form} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCategories,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(App);
