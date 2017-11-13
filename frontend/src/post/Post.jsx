import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
};
class Post extends Component {
  static propTypes = {
    type: PropTypes.string,
  };
  static defaultProps = {
    type: TYPE.POST,
  };
  render() {
    const isPost = this.props.type === TYPE.POST;
    const { info } = this.props;
    if (info.deleted) return null;
    const timestamp = moment(info.timestamp).format('YYYY-MM-DD HH:MM:SS');
    return (
      <div className="row">
        <div className="col s1">
          <div className="row">
            <div className="col s12">
              <a href="#">
                <i className="medium material-icons">expand_less</i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="center-align col s12">{info.voteScore}</div>
          </div>
          <div className="row">
            <div className="col s12">
              <a href="#">
                <i className="medium material-icons">expand_more</i>
              </a>
            </div>
          </div>
        </div>
        <div className="col s11">
          <div
            className={`card blue-grey ${isPost ? 'lighten-1' : 'darken-3'}`}
          >
            <div className="card-content white-text">
              <span className="card-title">{info.title}</span>
              <span className="right">{info.author}</span>
              <br />
              <span className="right">{timestamp}</span>
              <br />
              <p>{info.body}</p>
            </div>
            <div className="card-action">
              {isPost && (
                <a href="#">
                  <i className="material-icons">comment</i> comment
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
              {isPost && <div className="chip right">{info.category}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
