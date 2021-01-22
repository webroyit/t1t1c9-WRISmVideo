import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

import './VideoSidebar.css';

function VideoSidebar() {
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon />
                <p>200</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>29</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>75</p>
            </div>
        </div>
    )
}

export default VideoSidebar;