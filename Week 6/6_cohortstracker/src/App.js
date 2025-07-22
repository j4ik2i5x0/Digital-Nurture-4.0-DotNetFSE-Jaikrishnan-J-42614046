import React from 'react';
import CohortDetails from './components/CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    { id: 'INTADMDF10', program: '.NET FSD', startDate: '22-Feb-2022', status: 'Scheduled', coach: 'Aathma', trainer: 'Jojo Jose' },
    { id: 'ADM21JF014', program: 'Java FSD', startDate: '10-Sep-2021', status: 'Ongoing', coach: 'Apoorv', trainer: 'Elisa Smith' },
    { id: 'CDBJF21025', program: 'Java FSD', startDate: '24-Dec-2021', status: 'Ongoing', coach: 'Aathma', trainer: 'John Doe' }
  ];

  return (
    <div className="App">
      <h1>Cohorts Details</h1>
      <div className="cohorts-container">
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} details={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;