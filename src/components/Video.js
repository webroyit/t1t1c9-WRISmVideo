import React, { useState, useRef } from 'react';

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
    const [playing, setPlaying] = useState(false);

    // 'useRef' to access the video
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            // 'current' to get the curent reference of the video
            // Pause the video
            videoRef.current.pause();
            
            setPlaying(false);
        }
        else {
            // Play the video
            videoRef.current.play();

            setPlaying(true);
        }
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
            <VideoFooter
                channel="Username1"
                description="This is description"
                song="This is fun, try it again" />
            <VideoSidebar
                likes={163}
                shares={50}
                messages={24} />
        </div>
    )
}

export default Video;