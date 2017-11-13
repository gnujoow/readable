import React, { Component } from 'react';
import NavBar from './navbar';
import PostList from './container/postList';
import PostDetail from './container/postDetail';
import Form from './container/form';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
        {/* <PostList /> */}
        {/* <PostDetail /> */}
      </div>
    );
  }
}

export default App;
