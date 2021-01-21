import React from 'react';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './VideoFooter.css';

function VideoFooter() {
    return (
        <div className="videoFooter">
             <div className="videoFooter__text">
                <h3>@username1</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>This is fun, let try it again</p>
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