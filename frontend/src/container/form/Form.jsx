import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { postPost as apiPost } from '../../api';

class Form extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      id: '',
      title: '',
      author: '',
      body: '',
      category: 'redux',
      date: '',
    };
  }
  moveToHome = () => {
    this.props.history.push('/');
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlePost = () => {
    const { id, date, title, body, category, author } = this.state;
    if (!title) {
      alert('title is empty');
      return;
    }
    if (!body) {
      alert('body is empty');
      return;
    }
    if (!author) {
      alert('author is empty');
    }
    apiPost({ id, date, title, body, author, category }).then(res => {
      this.moveToHome();
    });
  };
  render() {
    return (
      <div className="container">
        <h1>New Post</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="title"
                  className="validate"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <label>Title</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="author"
                  className="validate"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
                <label>Author</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="body"
                  className="validate"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
                <label>Body</label>
              </div>
              <div className="col s12">
                <label>Categories</label>
                <select
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                  className="browser-default"
                >
                  {this.props.categories.map(category => (
                    <option id={category.name} value={category.name}>
                      {category.path}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={this.handlePost}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
        <button
          className="btn red waves-effect waves-light right"
          name="action"
          onClick={this.moveToHome}
        >
          cancel
          <i className="material-icons right">clear</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.currentPost,
    categories: state.categories,
  };
};
export default withRouter(connect(mapStateToProps, null)(Form));
