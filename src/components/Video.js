import React from 'react';

import './Video.css';

function Video() {
    return (
        <div className="video">
            <iframe
                title="cat"
                className="video__player"
                frameborder="0"
                loop
                src="//player.vimeo.com/video/394580451?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1"
            ></iframe>
        </div>
    )
}

export default Video;