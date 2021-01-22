import React from 'react';

import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="//player.vimeo.com/video/394580451?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1"
          channel="Username1"
          description="This is description"
          song="This is fun, try it again"
          likes={163}
          shares={50}
          messages={24}
          />
        <Video
          url="//player.vimeo.com/video/436938412?title=0&portrait=0&byline=0&autoplay=1"
          channel="Username2"
          description="This is description"
          song="This is fun, try it again"
          likes={213}
          shares={77}
          messages={69}
          />
      </div>
    </div>
  );
}

export default App;
