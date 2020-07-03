import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './video.css';

class Video extends Component {
    render() {
        const opts = {
          height: '520',
          width: '870',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };
     
        return <YouTube className='youtube' videoId="1g0kZhbhpyw" opts={opts} onReady={this._onReady} />;
      }
     
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default Video;