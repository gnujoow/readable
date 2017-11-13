import React, { Component } from 'react';

class Form extends Component {
  render () {
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
                />
                <label>Title</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="body"
                  className="validate"
                />
                <label>Body</label>
              </div>
              <div className="col s12">
                <label>Categories</label>
                <select className="browser-default">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
        <button
          className="btn red waves-effect waves-light right"
          name="action"
        >
          cancel
          <i className="material-icons right">clear</i>
        </button>
      </div>
    );
  }
}

export default Form;
