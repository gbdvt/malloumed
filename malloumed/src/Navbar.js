import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="minimal-navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/quizzes">Quizzes</Link></li>
        <li><Link to="/notes">Apuntes</Link></li>
        <li><Link to="/spaced-repetition">Spaced Repetition</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
