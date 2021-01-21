import React from 'react';

import './VideoFooter.css';

function VideoFooter() {
    return (
        <div className="videoFooter">
             <div className="videoFooter__text">
                <h3>@username1</h3>
                <p>This is a description</p>
            </div>
            <img
                className="videoFooter__record"
                src="/images/disk.png"
                alt="Disk" />
        </div>
    )
}

export default VideoFooter;