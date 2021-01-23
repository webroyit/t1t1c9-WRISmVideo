import React, { useState, useEffect } from 'react';

import './App.css';
import db from './firebase';
import Video from './components/Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fires once when the component loads and again based on the array

    // 'onSnapshot' get the data from firebase in real time
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    })
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, shares, messages}) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
