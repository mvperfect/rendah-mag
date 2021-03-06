/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';


export class Link extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <YouTube className="center  tac  db  w-90  center  h6" videoId={this.props.videoId} />
      </React.Fragment>
    );
  }
}

Link.propTypes = {
  videoId: PropTypes.string,
};

Link.defaultProps = {
  videoId: '',
};

export default Link;
