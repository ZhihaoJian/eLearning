import React from 'react';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import "video-react/dist/video-react.css";

class VideoPlayer extends React.Component{
    render(){
        return(
            <Player>
                <source src={this.props.videoSrc} />
            </Player>
        )
    }
}

VideoPlayer.propTypes = {
    videoSrc:PropTypes.string.isRequired
}

export default VideoPlayer;