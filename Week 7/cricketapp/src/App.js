import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  // Set this flag to true or false to switch between components
  const flag = true;

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <IndianPlayers />
      </div>
    );
  }
}

export default App;