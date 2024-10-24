import React from 'react';
import AssignmentTracker from './AssignmentTracker'; // Your existing component
import Calendar from './Calendar'; // Implement a simple calendar

const Assignments = () => {
  return (
    <div>
      <h1>Assignment Tracker</h1>
      <AssignmentTracker />
      <Calendar />
    </div>
  );
};

export default Assignments;
