import React from 'react';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './VideoFooter.css';

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
             <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="/images/disk.png"
                alt="Disk" />
        </div>
    )
}

export default VideoFooter;