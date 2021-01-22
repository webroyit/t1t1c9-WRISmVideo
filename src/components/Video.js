import React, { useState, useRef } from 'react';

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) {
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
                src={url}
            ></iframe>
            <VideoFooter
                channel={channel}
                description={description}
                song={song} />
            <VideoSidebar
                likes={likes}
                shares={shares}
                messages={messages} />
        </div>
    )
}

export default Video;