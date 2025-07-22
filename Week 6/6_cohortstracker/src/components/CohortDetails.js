import React from 'react';
// Import the CSS Module 
import styles from './CohortDetails.module.css';

const CohortDetails = ({ details }) => {
  // Define the style for the h3 element based on cohort status [cite: 68]
  const headerStyle = {
    color: details.status === 'Ongoing' ? 'green' : 'blue'
  };

  return (
    // Apply the box class from the CSS module to the container div [cite: 67]
    <div className={styles.box}>
      <h3 style={headerStyle}>{details.id} - {details.program}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{details.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{details.status}</dd>

        <dt>Coach</dt>
        <dd>{details.coach}</dd>

        <dt>Trainer</dt>
        <dd>{details.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;