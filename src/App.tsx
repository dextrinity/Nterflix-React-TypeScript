import React from 'react';
import './App.css';
import EpisodeList from './components/Episode/EpisodeList';
import HeaderContent from './components/Header/HeaderContent';
import SeasonContent from './components/Season/SeasonContent';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderContent />
      </div>
      <div className="content">
          <SeasonContent />
          <div className="container">
            <EpisodeList />
            </div>
        </div>


    </div>

  );
}

export default App;
