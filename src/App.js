import React from 'react';

import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <h1>WRI SmVideo</h1>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
