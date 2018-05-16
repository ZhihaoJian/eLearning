import React from 'react';
import { Player,BigPlayButton,LoadingSpinner  } from 'video-react';
import PropTypes from 'prop-types';
import sectionHOC from '../../HOC/sectionHOC/sectionHOC';
import './video-player.css';
import './index.css';

@sectionHOC
class VideoPlayer extends React.Component{
    render(){
        return(
            <Player>
                <BigPlayButton position="center" />
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                <LoadingSpinner/>
            </Player>
        )
    }
}

VideoPlayer.propTypes = {
    videoSrc:PropTypes.string.isRequired
}

export default VideoPlayer;