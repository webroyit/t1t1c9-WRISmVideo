import React, { useRef } from 'react';

import './Video.css';

function Video() {
    // 'useRef' to access the video
    const videoRef = useRef(null);

    const onVideoPress = () => {
        // 'current' to get the curent reference of the video
        // Play the video
        videoRef.current.play();
    }

    return (
        <div className="video">
            <iframe
                title="cat"
                className="video__player"
                frameborder="0"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="//player.vimeo.com/video/394580451?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1"
            ></iframe>
        </div>
    )
}

export default Video;