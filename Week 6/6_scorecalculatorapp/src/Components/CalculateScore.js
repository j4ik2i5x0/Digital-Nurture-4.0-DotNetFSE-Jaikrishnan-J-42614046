import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ name, school, total, goal }) => {
  let percentage = (total / 500) * 100;

  const calScore = () => {
    return percentage >= goal ? "Achieved" : "Not Achieved";
  };

  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
      <p><strong>Goal:</strong> {calScore()}</p>
    </div>
  );
};

export default CalculateScore;