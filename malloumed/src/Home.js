import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    { text: 'Review Lecture 1 Notes', completed: false },
    { text: 'Complete Quiz for Lecture 2', completed: false },
    { text: 'Add Flashcards for Lecture 3', completed: false }
  ]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="home-container">
      <div className="greeting">
        <h1>Hello Mallou!</h1>
        <p>You've had 3 classes today, please upload them.</p>
      </div>

      <div className="progress-bar-container">
        <p>Today's Progress:</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
        </div>
      </div>

      <div className="upload-section">
        <h2>Upload Today’s Classes</h2>
        <div className="upload-buttons">
          <button className="upload-btn">Inglés Médico</button>
          <button className="upload-btn">Anatomía</button>
          <button className="upload-btn">Biología</button>
        </div>
      </div>
      <div className="checklist-section">
        <h2>Your To-Do List for Today</h2>
        <ul className="checklist">
          {tasks.map((task, index) => (
            <li key={index} onClick={() => toggleTask(index)} className={task.completed ? 'completed' : ''}>
              <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
