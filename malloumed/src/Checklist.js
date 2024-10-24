import React, { useState } from 'react';

const Checklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Review today's lecture notes", completed: false },
    { id: 2, task: "Complete flashcards", completed: false },
    { id: 3, task: "Take a quiz on Chapter 3", completed: false },
  ]);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div>
      <h2>Checklist for Today</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
