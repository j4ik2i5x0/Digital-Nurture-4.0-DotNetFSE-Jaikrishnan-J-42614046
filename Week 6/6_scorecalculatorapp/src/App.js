import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Score Calculator</h1>
        <CalculateScore name="John Doe" school="Greenwood High" total={450} goal={85} />
        <CalculateScore name="Jane Smith" school="Oakridge International" total={410} goal={90} />
      </header>
    </div>
  );
}

export default App;