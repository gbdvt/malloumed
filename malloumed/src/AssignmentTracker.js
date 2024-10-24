import React, { useState } from 'react';

const AssignmentTracker = () => {
  const [assignments, setAssignments] = useState([]);
  const [assignmentText, setAssignmentText] = useState("");

  const addAssignment = () => {
    if (assignmentText) {
      setAssignments([...assignments, { text: assignmentText, completed: false }]);
      setAssignmentText("");
    }
  };

  return (
    <div>
      <h2>Assignment Tracker</h2>
      <input
        type="text"
        value={assignmentText}
        onChange={(e) => setAssignmentText(e.target.value)}
        placeholder="Add new assignment"
      />
      <button onClick={addAssignment}>Add</button>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>{assignment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentTracker;
