import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Series from './components/Series';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <Series />
      </header>
    </div>
  );
}

export default App;
