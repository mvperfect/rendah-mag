/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SpotifyPlayer from 'react-spotify-player';

export class Spotify extends PureComponent {
  render() {
    const size = {
      width: '100%',
      height: 80,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
      <div className="w-90  db  center">
        <div className="bg-dark-grey  pa2">
          <SpotifyPlayer
            uri={this.props.uri}
            size={size}
            view={view}
            theme={theme}
          />
        </div>
      </div>
    );
  }
}

Spotify.propTypes = {
  uri: PropTypes.string,
};

Spotify.defaultProps = {
  uri: '',
};

export default Spotify;
