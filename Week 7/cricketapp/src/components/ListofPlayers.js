import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // Use filter with an arrow function to get players with scores <= 70
  const playersBelow70 = players.filter(player => player.score <= 70);

  return (
    <div>
      <h1>List of Players</h1>
      {/* Use map with an arrow function to display all players */}
      {players.map((player, index) => (
        <div key={index}>
          <li>Mr. {player.name} <span>{player.score}</span></li>
        </div>
      ))}

      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      {playersBelow70.map((player, index) => (
        <div key={index}>
          <li>Mr. {player.name} <span>{player.score}</span></li>
        </div>
      ))}
    </div>
  );
}

export default ListofPlayers;