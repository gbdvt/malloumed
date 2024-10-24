import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UploadLectures from './UploadLectures';
import QuizzesFlashcards from './QuizzesFlashcards';
import AssignmentTracker from './AssignmentTracker';
import SpacedRepetition from './SpacedRepetition';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadLectures />} />
          <Route path="/quizzes" element={<QuizzesFlashcards />} />
          <Route path="/assignments" element={<AssignmentTracker />} />
          <Route path="/spaced-repetition" element={<SpacedRepetition />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
