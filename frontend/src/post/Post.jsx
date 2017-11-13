import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
}
class Post extends Component {
  static propTypes = {
    type: PropTypes.string,
  }
  static defaultProps = {
    type: TYPE.POST,
  }
  render () {
    const isPost = this.props.type === TYPE.POST;
    return (
      <div className="row">
        <div className="col s12">
            <div className={`card blue-grey ${isPost ? 'lighten-1' : 'darken-3'}`}>
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <span className="right">타임스탬프</span>
              <br />
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">
                <i className="material-icons">favorite</i> 9
              </a>
              {isPost && (
                <a href="#">
                  <i className="material-icons">comment</i> 8
                </a>
              )}
              <a href="#">
                <i className="material-icons">mode_edit</i>
                edit
              </a>
              <a href="#">
                <i className="material-icons">delete_forever</i>
                delete
              </a>
              {isPost && (
                <div className="chip right">
                  categories
               </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
