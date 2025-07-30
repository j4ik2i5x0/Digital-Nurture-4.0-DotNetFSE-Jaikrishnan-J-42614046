import React from 'react';

// Declare two arrays and merge them using the spread operator
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const allIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Component to display odd players using destructuring
function OddPlayers({ players }) {
  const [first, , third, , fifth] = players;
  return (
    <div>
      <h1>Odd Players</h1>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </div>
  );
}

// Component to display even players using destructuring
function EvenPlayers({ players }) {
  const [, second, , fourth, , sixth] = players;
  return (
    <div>
      <h1>Even Players</h1>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </div>
  );
}

function IndianPlayers() {
  const playerNames = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  return (
    <div>
      <OddPlayers players={playerNames} />
      <hr />
      <EvenPlayers players={playerNames} />
      <hr />
      <div>
        <h1>List of Indian Players Merged:</h1>
        {allIndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </div>
    </div>
  );
}

export default IndianPlayers;