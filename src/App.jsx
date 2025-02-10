import React from 'react';
import CVpreview from './components/CVpreview';
import './App.css';
import CVform from './components/CVform';
import Info from './components/info';


function App() {
  return (
    <div className="App">
      <h1>CV Preview</h1>
      <CVpreview />
      <CVform />
      <Info />
    </div>
  );
}

export default App;
