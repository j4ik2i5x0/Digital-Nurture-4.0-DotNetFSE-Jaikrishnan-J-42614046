import React from 'react';
import './App.css';
import officeImage from './assets/office-space.jpg';

function App() {
  const officeSpaces = [
    { id: 1, name: 'DBS', rent: 50000, address: 'Chennai' },
    { id: 2, name: 'WeWork', rent: 75000, address: 'Bengaluru' },
    { id: 3, name: 'Regus', rent: 45000, address: 'Hyderabad' },
    { id: 4, name: 'Koworks', rent: 80000, address: 'Mumbai' },
    { id: 5, name: 'The Hive', rent: 55000, address: 'Pune' },
    { id: 6, name: 'Awfis', rent: 65000, address: 'Delhi' },
    { id: 7, name: 'Smartworks', rent: 90000, address: 'Bengaluru' },
    { id: 8, name: '91springboard', rent: 48000, address: 'Chennai' },
    { id: 9, name: 'BHIVE', rent: 72000, address: 'Hyderabad' }
  ];

  return (
    // Main container
    <div>
      {/* Heading is now outside the grid container */}
      <h1 className="main-heading">Office Space, at Affordable Range</h1>

      {/* Grid container for the office cards */}
      <div className="App">
        {officeSpaces.map(space => {
          const rentStyle = {
            color: space.rent <= 60000 ? 'red' : 'green'
          };

          return (
            <div key={space.id} className="office-card">
              <img src={officeImage} alt="Modern office space" className="office-image" />
              
              <h2>Name: {space.name}</h2>
              <h3 style={rentStyle}>Rent: Rs. {space.rent}</h3>
              <h3>Address: {space.address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;