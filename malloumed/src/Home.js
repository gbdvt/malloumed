import React from 'react';
import './Home.css';  // Link to a CSS file for better styling

const Home = () => {
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

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <button className="action-btn">Quizzes of the Day</button>
        <button className="action-btn">Flashcards</button>
        <button className="action-btn">Spaced Repetition</button>
      </div>

      <div className="checklist-section">
        <h2>Your To-Do List for Today</h2>
        <ul className="checklist">
          <li><input type="checkbox" /> Review Lecture 1 Notes</li>
          <li><input type="checkbox" /> Complete Quiz for Lecture 2</li>
          <li><input type="checkbox" /> Add Flashcards for Lecture 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
