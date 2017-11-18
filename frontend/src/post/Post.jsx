import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import moment from 'moment';
import { deletePost as API_deletePost, votePost as API_votePost } from '../api';
import { deletePost, votePost } from '../actions/ActionCreator';

const TYPE = {
  POST: 'post',
  COMMENT: 'comment',
};

const VOTE = {
  UP: 'upVote',
  DOWN: 'downVote',
};
class Post extends Component {
  static propTypes = {
    type: PropTypes.string,
  };
  static defaultProps = {
    type: TYPE.POST,
  };
  handleDelete = id => {
    API_deletePost(id).then(res => {
      this.props.deletePost(id);
    });
  };
  handleVote = (id, vote) => {
    API_votePost(id, vote).then(res => {
      this.props.votePost(id, res.voteScore);
    });
  };
  render() {
    const isPost = this.props.type === TYPE.POST;
    const { info } = this.props;
    if (!info) return null;
    if (info.deleted) return null;
    const timestamp = moment(info.timestamp).format('YYYY-MM-DD HH:MM:SS');
    return (
      <div className="row">
        <div className="col s1">
          <div className="row">
            <div className="col s12">
              <a
                onClick={() => {
                  this.handleVote(info.id, VOTE.UP);
                }}
              >
                <i className="medium material-icons">expand_less</i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="center-align col s12">{info.voteScore || 0}</div>
          </div>
          <div className="row">
            <div className="col s12">
              <a
                onClick={() => {
                  this.handleVote(info.id, VOTE.DOWN);
                }}
              >
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
              <Link
                className="card-title"
                style={{ color: 'white' }}
                to={`/read/${info.id}`}
              >
                {info.title}
              </Link>
              <span className="right">{info.author || ''}</span>
              <br />
              <span className="right">{timestamp || ''}</span>
              <br />
              <p>{info.body}</p>
            </div>
            <div className="card-action">
              <a href="#">
                <i className="material-icons">mode_edit</i>
                edit
              </a>
              <a onClick={() => this.handleDelete(info.id)}>
                <i className="material-icons">delete_forever</i>
                delete
              </a>
              {isPost && (
                <div className="chip right">{info.category || ''}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deletePost,
      votePost,
    },
    dispatch,
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Post));
